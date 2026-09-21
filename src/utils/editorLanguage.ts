import type {
  EditorLanguage,
} from "../components/Editor/types";

export function getEditorLanguage(
  filename: string,
): EditorLanguage {
  const extension =
    filename
      .split(".")
      .pop()
      ?.toLowerCase() ?? "";

  switch (extension) {
    case "html":
    case "htm":
      return "html";

    case "css":
      return "css";

    case "js":
    case "mjs":
    case "cjs":
      return "javascript";

    case "ts":
    case "tsx":
      return "typescript";

    case "jsx":
      return "javascript";

    case "json":
      return "json";

    case "md":
    case "mdx":
      return "markdown";

    default:
      return "plaintext";
  }
}