import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
// @ts-ignore
import Layout from "@theme/Layout";

import {
  Check,
  Code2,
  Copy,
  Download,
  FilePlus2,
  FolderOpen,
  Maximize2,
  Minimize2,
  Monitor,
  Play,
  RefreshCw,
  RotateCcw,
  Save,
  Search,
  Smartphone,
  Tablet,
  Terminal,
  Trash2,
  X,
} from "lucide-react";

import FileTabs from "../../components/Editor/FileTabs";
import MonacoWorkspace from "../../components/Editor/MonacoWorkspace";

import type {
  ConsoleLog,
  DeviceMode,
  EditorFile,
  EditorProject,
} from "../../components/Editor/types";

import { editorTemplates } from "../../data/editorTemplates";

import {
  loadEditorProject,
  saveEditorProject,
} from "../../utils/editorStorage";

import {
  exportProject,
} from "../../utils/projectExporter";

import {
  createPreviewDocument,
} from "../../utils/previewCompiler";
// @ts-ignore
import styles from "./styles.module.css";

const defaultProject =
  editorTemplates[0].project;

function cloneProject(
  project: EditorProject,
): EditorProject {
  return JSON.parse(
    JSON.stringify(project),
  ) as EditorProject;
}

function createId(): string {
  return `file-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 9)}`;
}

export default function EditorPage(): JSX.Element {

  const [project, setProject] =
    useState<EditorProject>(() =>
      cloneProject(
        defaultProject,
      ),
    );

  const [activeFileId, setActiveFileId] =
    useState<string>(
      defaultProject.files[0].id,
    );

  const [device, setDevice] =
    useState<DeviceMode>(
      "desktop",
    );

  const [autoRun, setAutoRun] =
    useState(true);

  const [previewKey, setPreviewKey] =
    useState(0);

  const [consoleOpen, setConsoleOpen] =
    useState(true);

  const [logs, setLogs] =
    useState<ConsoleLog[]>([]);

  const [templateOpen, setTemplateOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [fullscreen, setFullscreen] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  const [loaded, setLoaded] =
    useState(false);

  const activeFile =
    project.files.find(
      (file) =>
        file.id === activeFileId,
    ) ?? null;

  const visibleFiles =
    useMemo(() => {
      const query =
        search.trim().toLowerCase();

      if (!query) {
        return project.files;
      }

      return project.files.filter(
        (file) =>
          file.name
            .toLowerCase()
            .includes(query),
      );
    }, [
      project.files,
      search,
    ]);

  const runCode =
    useCallback(() => {
      setLogs([]);

      setPreviewKey(
        (value) => value + 1,
      );
    }, []);

  const updateFile = useCallback(
    (value: string) => {
      setProject(
        (current) => ({
          ...current,

          files:
            current.files.map(
              (file) =>
                file.id ===
                activeFileId
                  ? {
                      ...file,
                      value,
                    }
                  : file,
            ),
        }),
      );

      setSaved(false);
    },
    [activeFileId],
  );

  const save = useCallback(() => {
    const success =
      saveEditorProject(
        project,
      );

    if (!success) {
      return;
    }

    setSaved(true);

    window.setTimeout(
      () => {
        setSaved(false);
      },
      1800,
    );
  }, [project]);

  const resetProject =
    useCallback(() => {
      const confirmed =
        window.confirm(
          "Reset the editor to the starter project?",
        );

      if (!confirmed) {
        return;
      }

      const fresh =
        cloneProject(
          defaultProject,
        );

      setProject(fresh);

      setActiveFileId(
        fresh.files[0].id,
      );

      setLogs([]);

      setPreviewKey(
        (value) => value + 1,
      );

      setSaved(false);
    }, []);

  const selectTemplate =
    useCallback(
      (
        templateProject: EditorProject,
      ) => {
        const fresh =
          cloneProject(
            templateProject,
          );

        setProject(fresh);

        setActiveFileId(
          fresh.files[0].id,
        );

        setLogs([]);

        setPreviewKey(
          (value) => value + 1,
        );

        setTemplateOpen(false);

        setSaved(false);
      },
      [],
    );

  const createFile =
    useCallback(() => {
      const name =
        window.prompt(
          "Enter file name",
          "app.js",
        );

      if (!name) {
        return;
      }

      const cleanName =
        name.trim();

      if (!cleanName) {
        return;
      }

      const exists =
        project.files.some(
          (file) =>
            file.name
              .toLowerCase() ===
            cleanName.toLowerCase(),
        );

      if (exists) {
        window.alert(
          "A file with this name already exists.",
        );

        return;
      }

      const extension =
        cleanName
          .split(".")
          .pop()
          ?.toLowerCase() ?? "";

      let language:
        EditorFile["language"] =
        "plaintext";

      if (
        extension === "html" ||
        extension === "htm"
      ) {
        language = "html";
      } else if (
        extension === "css"
      ) {
        language = "css";
      } else if (
        extension === "js" ||
        extension === "mjs"
      ) {
        language = "javascript";
      } else if (
        extension === "ts" ||
        extension === "tsx"
      ) {
        language = "typescript";
      } else if (
        extension === "json"
      ) {
        language = "json";
      } else if (
        extension === "md"
      ) {
        language = "markdown";
      }

      const newFile: EditorFile =
        {
          id: createId(),
          name: cleanName,
          language,
          value: "",
        };

      setProject(
        (current) => ({
          ...current,
          files: [
            ...current.files,
            newFile,
          ],
        }),
      );

      setActiveFileId(
        newFile.id,
      );

      setSaved(false);
    }, [project.files]);

  const closeFile =
    useCallback(
      (fileId: string) => {
        if (
          project.files.length <=
          1
        ) {
          return;
        }

        const index =
          project.files.findIndex(
            (file) =>
              file.id === fileId,
          );

        const nextFiles =
          project.files.filter(
            (file) =>
              file.id !== fileId,
          );

        setProject(
          (current) => ({
            ...current,
            files: nextFiles,
          }),
        );

        if (
          activeFileId === fileId
        ) {
          const next =
            nextFiles[
              Math.max(
                0,
                index - 1,
              )
            ];

          setActiveFileId(
            next.id,
          );
        }

        setSaved(false);
      },
      [
        activeFileId,
        project.files,
      ],
    );

  const copyFile =
    useCallback(
      async () => {
        if (!activeFile) {
          return;
        }

        try {
          await navigator.clipboard.writeText(
            activeFile.value,
          );

          setSaved(true);

          window.setTimeout(
            () => {
              setSaved(false);
            },
            1200,
          );
        } catch {
          window.alert(
            "Clipboard access is not available in this browser.",
          );
        }
      },
      [activeFile],
    );

  const download =
    useCallback(
      async () => {
        await exportProject(
          project,
        );
      },
      [project],
    );

  const clearConsole =
    useCallback(() => {
      setLogs([]);
    }, []);

  useEffect(() => {
    const stored =
      loadEditorProject();

    if (stored) {
      setProject(stored);

      if (
        stored.files.length > 0
      ) {
        setActiveFileId(
          stored.files[0].id,
        );
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (
      !loaded ||
      !autoRun
    ) {
      return;
    }

    const timer =
      window.setTimeout(
        () => {
          runCode();
        },
        650,
      );

    return () =>
      window.clearTimeout(
        timer,
      );
  }, [
    project.files,
    autoRun,
    loaded,
    runCode,
  ]);

  useEffect(() => {
    const handleMessage =
      (
        event: MessageEvent,
      ) => {
        const data =
          event.data;

        if (
          !data ||
          data.source !==
            "codeharborhub-editor"
        ) {
          return;
        }

        if (
          data.type ===
          "ready"
        ) {
          setLogs(
            (current) => [
              ...current,
              {
                id: createId(),
                type: "system",
                message:
                  "Preview connected successfully.",
                timestamp:
                  new Date().toLocaleTimeString(),
              },
            ],
          );

          return;
        }

        const supported =
          [
            "log",
            "warn",
            "error",
            "info",
          ].includes(
            data.type,
          );

        if (!supported) {
          return;
        }

        const message =
          Array.isArray(
            data.args,
          )
            ? data.args.join(
                " ",
              )
            : String(
                data.args ??
                  "",
              );

        setLogs(
          (current) => [
            ...current,
            {
              id: createId(),
              type: data.type,
              message,
              timestamp:
                new Date().toLocaleTimeString(),
            },
          ],
        );

        setConsoleOpen(
          true,
        );
      };

    window.addEventListener(
      "message",
      handleMessage,
    );

    return () => {
      window.removeEventListener(
        "message",
        handleMessage,
      );
    };
  }, []);

  useEffect(() => {
    const keyboard =
      (
        event: KeyboardEvent,
      ) => {
        const command =
          event.ctrlKey ||
          event.metaKey;

        if (
          command &&
          event.key.toLowerCase() ===
            "s"
        ) {
          event.preventDefault();
          save();
        }

        if (
          command &&
          event.key ===
            "Enter"
        ) {
          event.preventDefault();
          runCode();
        }
      };

    window.addEventListener(
      "keydown",
      keyboard,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        keyboard,
      );
    };
  }, [
    runCode,
    save,
  ]);

  if (!loaded) {
    return (
      <Layout title="Editor">
        <div
          className={
            styles.loading
          }
        >
          <div
            className={
              styles.spinner
            }
          />

          <span>
            Loading CodeHarborHub
            Editor...
          </span>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Online Code Editor"
      description="CodeHarborHub online HTML, CSS and JavaScript live editor."
    >
      <main
        className={
          styles.editorPage
        }
      >
        {/* HEADER */}

        <header
          className={
            styles.header
          }
        >
          <div
            className={
              styles.brand
            }
          >
            <div
              className={
                styles.brandIcon
              }
            >
              <Code2 size={20} />
            </div>

            <div>
              <strong>
                CodeHarborHub
                Editor
              </strong>

              <span>
                <i
                  className={
                    styles.liveDot
                  }
                />

                Live Playground
              </span>
            </div>
          </div>

          <div
            className={
              styles.headerActions
            }
          >
            <button
              type="button"
              className={
                styles.secondaryButton
              }
              onClick={() =>
                setTemplateOpen(
                  (value) =>
                    !value,
                )
              }
            >
              <FolderOpen
                size={15}
              />

              <span>
                Templates
              </span>
            </button>

            <button
              type="button"
              className={
                styles.secondaryButton
              }
              onClick={save}
            >
              {saved ? (
                <Check size={15} />
              ) : (
                <Save size={15} />
              )}

              <span>
                {saved
                  ? "Saved"
                  : "Save"}
              </span>
            </button>

            <button
              type="button"
              className={
                styles.runButton
              }
              onClick={runCode}
            >
              <Play size={15} />

              <span>
                Run
              </span>
            </button>
          </div>
        </header>

        {/* TEMPLATE PANEL */}

        {templateOpen && (
          <section
            className={
              styles.templatePanel
            }
          >
            <div
              className={
                styles.panelHeading
              }
            >
              <div>
                <strong>
                  Project Templates
                </strong>

                <span>
                  Start quickly with
                  a ready-to-edit
                  project.
                </span>
              </div>

              <button
                type="button"
                className={
                  styles.iconButton
                }
                onClick={() =>
                  setTemplateOpen(
                    false,
                  )
                }
              >
                <X size={16} />
              </button>
            </div>

            <div
              className={
                styles.templateGrid
              }
            >
              {editorTemplates.map(
                (template) => (
                  <button
                    key={
                      template.id
                    }
                    type="button"
                    className={
                      styles.templateCard
                    }
                    onClick={() =>
                      selectTemplate(
                        template.project,
                      )
                    }
                  >
                    <span
                      className={
                        styles.templateIcon
                      }
                    >
                      {
                        template.icon
                      }
                    </span>

                    <span>
                      <strong>
                        {
                          template.name
                        }
                      </strong>

                      <small>
                        {
                          template.description
                        }
                      </small>
                    </span>
                  </button>
                ),
              )}
            </div>
          </section>
        )}

        {/* WORKSPACE */}

        <section
          className={
            styles.workspace
          }
        >
          {/* EDITOR */}

          <section
            className={
              styles.editorPane
            }
          >
            <div
              className={
                styles.toolbar
              }
            >
              <div
                className={
                  styles.toolbarLeft
                }
              >
                <FileTabs
                  files={
                    visibleFiles
                  }
                  activeFileId={
                    activeFileId
                  }
                  onSelect={
                    setActiveFileId
                  }
                  onClose={
                    closeFile
                  }
                />
              </div>

              <div
                className={
                  styles.toolbarActions
                }
              >
                <button
                  type="button"
                  title="New file"
                  onClick={
                    createFile
                  }
                >
                  <FilePlus2
                    size={15}
                  />
                </button>

                <button
                  type="button"
                  title="Search files"
                  onClick={() =>
                    setSearchOpen(
                      (value) =>
                        !value,
                    )
                  }
                >
                  <Search
                    size={15}
                  />
                </button>

                <label
                  className={
                    styles.autoRun
                  }
                >
                  <input
                    type="checkbox"
                    checked={
                      autoRun
                    }
                    onChange={(
                      event,
                    ) =>
                      setAutoRun(
                        event
                          .target
                          .checked,
                      )
                    }
                  />

                  <span>
                    Auto
                  </span>
                </label>

                <button
                  type="button"
                  title="Copy current file"
                  onClick={
                    copyFile
                  }
                >
                  <Copy
                    size={15}
                  />
                </button>

                <button
                  type="button"
                  title="Reset"
                  onClick={
                    resetProject
                  }
                >
                  <RotateCcw
                    size={15}
                  />
                </button>
              </div>
            </div>

            {searchOpen && (
              <div
                className={
                  styles.searchBar
                }
              >
                <Search
                  size={14}
                />

                <input
                  value={search}
                  onChange={(
                    event,
                  ) =>
                    setSearch(
                      event.target
                        .value,
                    )
                  }
                  placeholder="Search files..."
                  autoFocus
                />

                <button
                  type="button"
                  onClick={() => {
                    setSearch(
                      "",
                    );

                    setSearchOpen(
                      false,
                    );
                  }}
                >
                  <X size={14} />
                </button>
              </div>
            )}

            <div
              className={
                styles.monaco
              }
            >
              <MonacoWorkspace
                file={
                  activeFile
                }
                onChange={
                  updateFile
                }
              />
            </div>

            <div
              className={
                styles.statusBar
              }
            >
              <div>
                <span>
                  {activeFile
                    ?.language ??
                    "plaintext"}
                </span>

                <span>
                  UTF-8
                </span>

                <span>
                  Spaces: 2
                </span>
              </div>

              <div>
                <span>
                  {activeFile
                    ?.value
                    .length ??
                    0}{" "}
                  chars
                </span>

                <span>
                  Ctrl + Enter
                  Run
                </span>
              </div>
            </div>
          </section>

          {/* PREVIEW */}

          <section
            className={`${styles.previewPane} ${
              fullscreen
                ? styles.fullscreen
                : ""
            }`}
          >
            <div
              className={
                styles.previewToolbar
              }
            >
              <div
                className={
                  styles.previewTitle
                }
              >
                <i
                  className={
                    styles.previewDot
                  }
                />

                Preview
              </div>

              <div
                className={
                  styles.previewControls
                }
              >
                <button
                  type="button"
                  className={
                    device ===
                    "desktop"
                      ? styles.activeDevice
                      : ""
                  }
                  onClick={() =>
                    setDevice(
                      "desktop",
                    )
                  }
                  title="Desktop"
                >
                  <Monitor
                    size={15}
                  />
                </button>

                <button
                  type="button"
                  className={
                    device ===
                    "tablet"
                      ? styles.activeDevice
                      : ""
                  }
                  onClick={() =>
                    setDevice(
                      "tablet",
                    )
                  }
                  title="Tablet"
                >
                  <Tablet
                    size={15}
                  />
                </button>

                <button
                  type="button"
                  className={
                    device ===
                    "mobile"
                      ? styles.activeDevice
                      : ""
                  }
                  onClick={() =>
                    setDevice(
                      "mobile",
                    )
                  }
                  title="Mobile"
                >
                  <Smartphone
                    size={15}
                  />
                </button>

                <span
                  className={
                    styles.divider
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    setPreviewKey(
                      (value) =>
                        value + 1,
                    )
                  }
                  title="Refresh preview"
                >
                  <RefreshCw
                    size={15}
                  />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setFullscreen(
                      (value) =>
                        !value,
                    )
                  }
                  title={
                    fullscreen
                      ? "Exit fullscreen"
                      : "Fullscreen"
                  }
                >
                  {fullscreen ? (
                    <Minimize2
                      size={15}
                    />
                  ) : (
                    <Maximize2
                      size={15}
                    />
                  )}
                </button>
              </div>
            </div>

            <div
              className={
                styles.previewArea
              }
            >
              <div
                className={`${styles.deviceFrame} ${
                  styles[
                    `device-${device}`
                  ]
                }`}
              >
                <iframe
                  key={
                    previewKey
                  }
                  title="CodeHarborHub Live Preview"
                  className={
                    styles.iframe
                  }
                  sandbox="allow-scripts allow-forms allow-modals"
                  srcDoc={createPreviewDocument(
                    project.files,
                  )}
                />
              </div>
            </div>

            {/* CONSOLE */}

            <div
              className={`${styles.console} ${
                consoleOpen
                  ? styles.consoleOpen
                  : styles.consoleClosed
              }`}
            >
              <button
                type="button"
                className={
                  styles.consoleHeader
                }
                onClick={() =>
                  setConsoleOpen(
                    (value) =>
                      !value,
                  )
                }
              >
                <span>
                  <Terminal
                    size={14}
                  />

                  Console
                </span>

                <span>
                  {logs.length}{" "}
                  logs
                </span>
              </button>

              {consoleOpen && (
                <div
                  className={
                    styles.consoleBody
                  }
                >
                  <div
                    className={
                      styles.consoleActions
                    }
                  >
                    <button
                      type="button"
                      onClick={
                        clearConsole
                      }
                    >
                      <Trash2
                        size={13}
                      />

                      Clear
                    </button>
                  </div>

                  {logs.length ===
                  0 ? (
                    <div
                      className={
                        styles.emptyConsole
                      }
                    >
                      <Terminal
                        size={18}
                      />

                      <span>
                        Console output
                        will appear
                        here.
                      </span>
                    </div>
                  ) : (
                    <div
                      className={
                        styles.logs
                      }
                    >
                      {logs.map(
                        (log) => (
                          <div
                            key={
                              log.id
                            }
                            className={`${styles.log} ${
                              styles[
                                `log-${log.type}`
                              ]
                            }`}
                          >
                            <strong>
                              {log.type.toUpperCase()}
                            </strong>

                            <code>
                              {
                                log.message
                              }
                            </code>

                            <time>
                              {
                                log.timestamp
                              }
                            </time>
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        </section>

        {/* FOOTER */}

        <footer
          className={
            styles.footer
          }
        >
          <div
            className={
              styles.footerLeft
            }
          >
            <span>
              <Code2
                size={14}
              />

              CodeHarborHub
              Editor
            </span>

            <span>
              Local workspace
            </span>
          </div>

          <div
            className={
              styles.footerActions
            }
          >
            <button
              type="button"
              onClick={copyFile}
            >
              <Copy size={14} />
              Copy
            </button>

            <button
              type="button"
              onClick={download}
            >
              <Download
                size={14}
              />
              Download ZIP
            </button>
          </div>
        </footer>
      </main>
    </Layout>
  );
}