import React from "react";
import Head from "@docusaurus/Head";
import MDXComponents from "../MDXComponents";
import { MDXProvider } from "@mdx-js/react";
import {
  useDoc,
  useDocsVersion,
} from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import DocPaginator from "@theme/DocPaginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import TOC from "@theme/TOC";
import clsx from "clsx";
import styles from "./styles.module.css";
import DocsInfo from "./DocsInfo";
import DocsRating from "./DocsRating";

export const DocContent = ({ Content, contentRef, readingTimeInWords }) => {
  const { siteConfig } = useDocusaurusContext();
  const {
    metadata,
    frontMatter: {
      image: metaImage,
      keywords,
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents,
    },
    toc,
  } = useDoc();

  const { url: siteUrl } = siteConfig;
  const versionMetadata = useDocsVersion();
  const {
    description,
    title,
    permalink,
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
    unversionedId,
  } = metadata;

  const metaImageUrl = useBaseUrl(metaImage, {
    absolute: true,
  });

  return (
    <>
      <Head>
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(",")} />
        )}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta name="twitter:image" content={metaImageUrl} />}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        {permalink && <link rel="canonical" href={siteUrl + permalink} />}
      </Head>

      <div className="row">
        <div
          className={clsx("col", {
            [styles.docItemCol]: !hideTableOfContents,
          })}
        >
          {/* <DocVersionBanner versionMetadata={versionMetadata} /> */}
          <div className={styles.docItemContainer}>
            <article className="article-content">              
              {!hideTitle && (
                <header className="mb-4">
                  <h1 className={styles.docTitle}>{title}</h1>
                </header>
              )}
              {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
                <DocsInfo
                  editUrl={editUrl}
                  lastUpdatedAt={lastUpdatedAt}
                  lastUpdatedBy={lastUpdatedBy}
                  readingTimeInWords={readingTimeInWords}
                  title={title}
                />
              )}
              <MDXProvider components={MDXComponents}>
                <div className="markdown" ref={contentRef}>
                  <Content />
                </div>
              </MDXProvider>
            </article>

            <div className="margin-left--none margin-top--md text--center">
              <DocsRating label={unversionedId} />
            </div>
            <div className="margin-vert--lg">
              <DocPaginator previous={metadata.previous} next={metadata.next} />
            </div>
          </div>
        </div>
        {!hideTableOfContents && toc && (
          <div className="col col--3">
            <TOC toc={toc} />
          </div>
        )}
      </div>
    </>
  );
};