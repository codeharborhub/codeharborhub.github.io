import type React from "react";

export type EditorLanguage =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "json"
  | "markdown"
  | "plaintext";

export interface EditorFile {
  id: string;
  name: string;
  language: EditorLanguage;
  value: string;
  readOnly?: boolean;
}

export interface EditorProject {
  id: string;
  name: string;
  description: string;
  files: EditorFile[];
}

export type DeviceMode =
  | "desktop"
  | "tablet"
  | "mobile";

export interface ConsoleLog {
  id: string;
  type:
    | "log"
    | "warn"
    | "error"
    | "info"
    | "system";
  message: string;
  timestamp: string;
}

export interface EditorTemplate {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  project: EditorProject;
}