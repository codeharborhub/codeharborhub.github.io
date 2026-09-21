import React from "react";

import {
  Code2,
  FileCode2,
  FileJson,
  FileText,
  X,
} from "lucide-react";

import type {
  EditorFile,
} from "./types";
// @ts-ignore
import "./styles.css";

interface FileTabsProps {
  files: EditorFile[];
  activeFileId: string;
  onSelect: (id: string) => void;
  onClose: (id: string) => void;
}

function getIcon(
  filename: string,
): React.ReactNode {
  const extension =
    filename
      .split(".")
      .pop()
      ?.toLowerCase();

  if (
    extension === "html" ||
    extension === "htm"
  ) {
    return <FileCode2 size={15} />;
  }

  if (extension === "json") {
    return <FileJson size={15} />;
  }

  if (
    extension === "css" ||
    extension === "md" ||
    extension === "mdx"
  ) {
    return <FileText size={15} />;
  }

  return <Code2 size={15} />;
}

export default function FileTabs({
  files,
  activeFileId,
  onSelect,
  onClose,
}: FileTabsProps): JSX.Element {
  return (
    <div className="ch-editor-file-tabs">
      {files.map((file) => {
        const active =
          file.id === activeFileId;

        return (
          <button
            key={file.id}
            type="button"
            className={`ch-editor-file-tab ${
              active
                ? "ch-editor-file-tab-active"
                : ""
            }`}
            onClick={() =>
              onSelect(file.id)
            }
          >
            {getIcon(file.name)}

            <span>
              {file.name}
            </span>

            {files.length > 1 && (
              <span
                className="ch-editor-file-close"
                role="button"
                tabIndex={0}
                onClick={(event) => {
                  event.stopPropagation();
                  onClose(file.id);
                }}
                onKeyDown={(event) => {
                  if (
                    event.key ===
                      "Enter" ||
                    event.key ===
                      " "
                  ) {
                    event.preventDefault();
                    event.stopPropagation();
                    onClose(file.id);
                  }
                }}
                aria-label={`Close ${file.name}`}
              >
                <X size={12} />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}