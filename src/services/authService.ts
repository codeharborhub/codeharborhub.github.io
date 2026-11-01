export interface DemoUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  salt: string;
  createdAt: string;
  updatedAt: string;
}

export interface PublicUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface DemoSession {
  userId: string;
  sessionId: string;
  createdAt: number;
  expiresAt: number;
}

const USERS_KEY = "chh_demo_v1_users";
const SESSION_KEY = "chh_demo_v1_session";
const RESET_KEY = "chh_demo_v1_reset";
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000;
const PBKDF2_ITERATIONS = 150_000;

function storage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function readUsers(): DemoUser[] {
  try {
    const raw = storage()?.getItem(USERS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as DemoUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: DemoUser[]): void {
  const target = storage();
  if (!target) throw new Error("Browser storage is unavailable.");
  try {
    target.setItem(USERS_KEY, JSON.stringify(users));
  } catch {
    throw new Error("Could not save demo account. Check browser storage settings.");
  }
}

function publicUser(user: DemoUser): PublicUser {
  const { id, name, email, createdAt, updatedAt } = user;
  return { id, name, email, createdAt, updatedAt };
}

function randomHex(byteLength = 16): string {
  if (!globalThis.crypto?.getRandomValues) {
    throw new Error("Secure random generation is unavailable. Use HTTPS or localhost.");
  }
  const bytes = new Uint8Array(byteLength);
  globalThis.crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function createId(): string {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return randomHex(16);
}

async function derivePassword(password: string, salt: string): Promise<string> {
  if (!globalThis.crypto?.subtle) {
    throw new Error("Web Crypto is unavailable. Use HTTPS or localhost.");
  }
  const key = await globalThis.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await globalThis.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: new TextEncoder().encode(salt),
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    key,
    256,
  );
  return Array.from(new Uint8Array(bits), (b) => b.toString(16).padStart(2, "0")).join("");
}

function saveSession(userId: string): void {
  const target = storage();
  if (!target) throw new Error("Browser storage is unavailable.");
  const now = Date.now();
  const session: DemoSession = {
    userId,
    sessionId: createId(),
    createdAt: now,
    expiresAt: now + SESSION_DURATION,
  };
  target.setItem(SESSION_KEY, JSON.stringify(session));
}

function readSession(): DemoSession | null {
  try {
    const raw = storage()?.getItem(SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as DemoSession;
    if (!session?.userId || !session?.sessionId || session.expiresAt <= Date.now()) {
      storage()?.removeItem(SESSION_KEY);
      return null;
    }
    return session;
  } catch {
    storage()?.removeItem(SESSION_KEY);
    return null;
  }
}

function validateName(name: string): string {
  const clean = name.trim().replace(/\s+/g, " ");
  if (clean.length < 2 || clean.length > 60) {
    throw new Error("Name must be between 2 and 60 characters.");
  }
  return clean;
}

function validateEmail(email: string): string {
  const clean = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean) || clean.length > 254) {
    throw new Error("Enter a valid email address.");
  }
  return clean;
}

function validatePassword(password: string): void {
  if (password.length < 8 || password.length > 128) {
    throw new Error("Password must be between 8 and 128 characters.");
  }
}

export const authService = {
  async register(name: string, email: string, password: string): Promise<PublicUser> {
    const cleanName = validateName(name);
    const cleanEmail = validateEmail(email);
    validatePassword(password);

    const users = readUsers();
    if (users.some((user) => user.email === cleanEmail)) {
      throw new Error("An account with this email already exists in this browser.");
    }

    const salt = randomHex(16);
    const passwordHash = await derivePassword(password, salt);
    const now = new Date().toISOString();

    const user: DemoUser = {
      id: createId(),
      name: cleanName,
      email: cleanEmail,
      passwordHash,
      salt,
      createdAt: now,
      updatedAt: now,
    };

    users.push(user);
    writeUsers(users);
    saveSession(user.id);
    return publicUser(user);
  },

  async login(email: string, password: string): Promise<PublicUser> {
    const cleanEmail = validateEmail(email);
    const user = readUsers().find((item) => item.email === cleanEmail);
    if (!user) throw new Error("Email or password is incorrect.");

    const attempted = await derivePassword(password, user.salt);
    if (attempted !== user.passwordHash) {
      throw new Error("Email or password is incorrect.");
    }

    saveSession(user.id);
    return publicUser(user);
  },

  getCurrentUser(): PublicUser | null {
    const session = readSession();
    if (!session) return null;
    const user = readUsers().find((item) => item.id === session.userId);
    return user ? publicUser(user) : null;
  },

  logout(): void {
    storage()?.removeItem(SESSION_KEY);
  },

  updateProfile(name: string): PublicUser {
    const current = this.getCurrentUser();
    if (!current) throw new Error("Your demo session has expired. Sign in again.");

    const users = readUsers();
    const index = users.findIndex((item) => item.id === current.id);
    if (index < 0) throw new Error("Demo account could not be found.");

    users[index].name = validateName(name);
    users[index].updatedAt = new Date().toISOString();
    writeUsers(users);
    return publicUser(users[index]);
  },

  requestPasswordReset(email: string): void {
    const cleanEmail = validateEmail(email);
    const exists = readUsers().some((item) => item.email === cleanEmail);
    if (!exists) {
      throw new Error("No demo account with that email exists in this browser.");
    }
    // This is intentionally not a secure token and does not prove email ownership.
    storage()?.setItem(RESET_KEY, cleanEmail);
  },

  async resetPassword(password: string): Promise<void> {
    validatePassword(password);
    const target = storage();
    const email = target?.getItem(RESET_KEY);
    if (!email) throw new Error("Reset session not found. Start again.");

    const users = readUsers();
    const index = users.findIndex((item) => item.email === email);
    if (index < 0) throw new Error("Demo account could not be found.");

    const salt = randomHex(16);
    users[index].salt = salt;
    users[index].passwordHash = await derivePassword(password, salt);
    users[index].updatedAt = new Date().toISOString();

    writeUsers(users);
    target?.removeItem(RESET_KEY);
    target?.removeItem(SESSION_KEY);
  },

  clearDemoData(): void {
    storage()?.removeItem(USERS_KEY);
    storage()?.removeItem(SESSION_KEY);
    storage()?.removeItem(RESET_KEY);
  },

  getSessionExpiry(): number | null {
    return readSession()?.expiresAt ?? null;
  },
};
