import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

interface CodePenThemeEmbedProps {
  title: string;
  penId: string;
  height?: number;
}

export default function CodePenEmbed({
  title,
  penId,
  height = 500,
}: CodePenThemeEmbedProps) {
  const { colorMode } = useColorMode();

  const theme = colorMode === "dark" ? "dark" : "light";

  const src = `https://codepen.io/ajay-dhangar/embed/${penId}?default-tab=html%2Cresult&editable=true&theme-id=${theme}`;

  return (
    <div className="my-6 rounded overflow-hidden border border-gray-700 dark:border-gray-600 shadow-lg">
      <iframe
        height={height}
        style={{ width: "100%", border: "none" }}
        scrolling="no"
        title={title}
        src={src}
        frameBorder="no"
        loading="lazy"
        allowTransparency={true}
        allowFullScreen={true}
      >
        See the Pen{" "}
        <a href={`https://codepen.io/ajay-dhangar/pen/${penId}`}>
          {title}
        </a>{" "}
        by Ajay Dhangar (
        <a href="https://codepen.io/ajay-dhangar">@ajay-dhangar</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  );
}