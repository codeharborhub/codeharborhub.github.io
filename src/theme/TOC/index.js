import React from "react";
// import { useLocation } from "@docusaurus/router";
import clsx from "clsx";
import TOCItems from "@theme/TOCItems";
import styles from "./styles.module.css";
import Ads from "@site/src/components/Ads";

const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";

// import AdsComponent from "@site/src/components/AdsComponent";

// function SidebarAd() {
//   return (
//     <div
//       style={{
//         border: "solid thin gray",
//         padding: 10,
//         textAlign: "center",
//         marginTop: 10,
//       }}
//     >
//       <AdsComponent />
//     </div>
//   );
// }

function TOC({ className, ...props }) {
  // const { pathname } = useLocation();
  // const shouldShowSidebarAd = pathname.includes("/");
  return (
    <div className={clsx(styles.tableOfContents, "thin-scrollbar", className)}>
      <div className="margin--md">
        <Ads position="table_of_contents" />
      </div>
      <h3
        className="padding-left--md padding-top--md margin-bottom--none"
        style={{
          textTransform: "uppercase",
          fontSize: "0.75em",
          color: "var(--ifm-color-emphasis-700)",
          letterSpacing: "0.5px",
        }}
      >
        Table of Contents
      </h3>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
      {/* {shouldShowSidebarAd && <SidebarAd />} */}
    </div>
  );
}

export default TOC;
