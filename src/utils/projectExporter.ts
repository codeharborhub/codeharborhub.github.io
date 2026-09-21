import JSZip from "jszip";

import type {
  EditorProject,
} from "../components/Editor/types";

export async function exportProject(
  project: EditorProject,
): Promise<void> {
  const zip = new JSZip();

  project.files.forEach(
    (file) => {
      zip.file(
        file.name,
        file.value,
      );
    },
  );

  zip.file(
    "README.md",
    `# ${project.name}

${project.description}

Created with the CodeHarborHub Editor.

## Files

${project.files
  .map(
    (file) =>
      `- ${file.name}`,
  )
  .join("\n")}

## CodeHarborHub

https://codeharborhub.github.io/
`,
  );

  const blob =
    await zip.generateAsync({
      type: "blob",
    });

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    `${project.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(
        /^-|-$/g,
        "",
      ) || "codeharborhub-project"}.zip`;

  document.body.appendChild(link);

  link.click();

  link.remove();

  URL.revokeObjectURL(url);
}