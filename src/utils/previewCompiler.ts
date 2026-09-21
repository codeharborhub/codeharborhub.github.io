import type {
  EditorFile,
} from "../components/Editor/types";

function getFile(
  files: EditorFile[],
  filename: string,
): string {
  return (
    files.find(
      (file) =>
        file.name === filename,
    )?.value ?? ""
  );
}

function extractBody(
  html: string,
): string {
  return html
    .replace(
      /<!doctype[^>]*>/gi,
      "",
    )
    .replace(
      /<html[^>]*>/gi,
      "",
    )
    .replace(
      /<\/html>/gi,
      "",
    )
    .replace(
      /<head[^>]*>[\s\S]*?<\/head>/gi,
      "",
    )
    .replace(
      /<body[^>]*>/gi,
      "",
    )
    .replace(
      /<\/body>/gi,
      "",
    )
    .trim();
}

export function createPreviewDocument(
  files: EditorFile[],
): string {
  const html =
    getFile(files, "index.html");

  const css =
    getFile(files, "style.css");

  const javascript =
    getFile(files, "script.js");

  const body =
    extractBody(html);

  const safeCSS =
    css.replace(
      /<\/style/gi,
      "<\\/style",
    );

  const safeJavaScript =
    javascript.replace(
      /<\/script/gi,
      "<\\/script",
    );

  return `<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
/>

<style>
${safeCSS}
</style>

<script>

(function () {

  function serialize(value) {

    try {

      if (
        typeof value ===
        "object"
      ) {

        if (
          value === null
        ) {
          return "null";
        }

        return JSON.stringify(
          value,
          null,
          2,
        );
      }

      return String(value);

    } catch {

      return String(value);

    }

  }

  function send(
    type,
    values,
  ) {

    try {

      window.parent.postMessage(
        {
          source:
            "codeharborhub-editor",

          type,

          args:
            values.map(
              serialize,
            ),
        },
        "*",
      );

    } catch {}

  }

  const originalLog =
    console.log;

  const originalWarn =
    console.warn;

  const originalError =
    console.error;

  const originalInfo =
    console.info;

  console.log =
    function (...args) {

      send(
        "log",
        args,
      );

      originalLog.apply(
        console,
        args,
      );

    };

  console.warn =
    function (...args) {

      send(
        "warn",
        args,
      );

      originalWarn.apply(
        console,
        args,
      );

    };

  console.error =
    function (...args) {

      send(
        "error",
        args,
      );

      originalError.apply(
        console,
        args,
      );

    };

  console.info =
    function (...args) {

      send(
        "info",
        args,
      );

      originalInfo.apply(
        console,
        args,
      );

    };

  window.addEventListener(
    "error",
    function (event) {

      send(
        "error",
        [
          event.message ||
            "Unknown error",
        ],
      );

    },
  );

  window.addEventListener(
    "unhandledrejection",
    function (event) {

      send(
        "error",
        [
          "Unhandled Promise rejection: " +
            serialize(
              event.reason,
            ),
        ],
      );

    },
  );

  window.parent.postMessage(
    {
      source:
        "codeharborhub-editor",

      type: "ready",

      args: [
        "Preview ready",
      ],
    },
    "*",
  );

})();

</script>

</head>

<body>

${body}

<script>
${safeJavaScript}
</script>

</body>

</html>`;
}