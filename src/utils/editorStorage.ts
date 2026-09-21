import type {
  EditorProject,
} from "../components/Editor/types";

const STORAGE_KEY =
  "codeharborhub-editor-project-v2";

export function saveEditorProject(
  project: EditorProject,
): boolean {
  if (
    typeof window ===
    "undefined"
  ) {
    return false;
  }

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(project),
    );

    return true;
  } catch {
    return false;
  }
}

export function loadEditorProject():
  | EditorProject
  | null {
  if (
    typeof window ===
    "undefined"
  ) {
    return null;
  }

  try {
    const value =
      localStorage.getItem(
        STORAGE_KEY,
      );

    if (!value) {
      return null;
    }

    const parsed =
      JSON.parse(value);

    if (
      !parsed ||
      typeof parsed !== "object" ||
      !Array.isArray(parsed.files)
    ) {
      return null;
    }

    return parsed as EditorProject;
  } catch {
    return null;
  }
}

export function clearEditorProject(): void {
  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  try {
    localStorage.removeItem(
      STORAGE_KEY,
    );
  } catch {
    // Ignore storage errors.
  }
}