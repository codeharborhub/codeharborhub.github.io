import React from "react";
import { useLocation } from "react-router-dom";
import {
  FiEdit3,
  FiPrinter,
  FiAlertCircle,
  FiClock,
  FiUser,
} from "react-icons/fi";
import styles from "./styles.module.css";
import ShareButton from "./ShareButton";

function DocsInfo({ docsPluginId, ...props }) {
  const location = useLocation();
  const openDocIssueURL =
    "https://github.com/codeharborhub/codeharborhub.github.io/issues/new?assignees=&labels=&template=---doc-error-report.md&title=Issue with codeharborhub.github.io" +
    `${location.pathname}`;

  return (
    <div className={`${styles.docsInfoWrapper} mt-4`}>
      <div className={`${styles.docsInfoContainer}`}>
        {/* Left Section – Meta Info */}
        {(props.lastUpdatedAt || props.lastUpdatedBy) && (
          <div className={styles.metaInfo}>
            {props.lastUpdatedAt && (
              <span className={styles.metaItem}>
                <FiClock className={styles.icon} />
                <time dateTime={new Date(props.lastUpdatedAt).toISOString()}>
                  {new Date(props.lastUpdatedAt).toLocaleDateString()}
                </time>
              </span>
            )}
            {props.readingTimeInWords && (
              <span className={styles.metaItem}>
                ⏱ {props.readingTimeInWords}
              </span>
            )}
            {props.lastUpdatedBy && (
              <span className={styles.metaItem}>
                <FiUser className={styles.icon} />
                {props.lastUpdatedBy}
              </span>
            )}
          </div>
        )}

        {/* Right Section – Actions */}
        <div className={styles.actions}>
          {props.editUrl && (
            <a
              href={props.editUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.actionBtn}
            >
              <FiEdit3 className={styles.icon} />
              Edit
            </a>
          )}

          <button
            onClick={() => window.print()}
            className={styles.actionBtn}
            aria-label="Print this page"
          >
            <FiPrinter className={styles.icon} />
            Print
          </button>

          {openDocIssueURL && (
            <a
              href={openDocIssueURL}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.actionBtn}
            >
              <FiAlertCircle className={styles.icon} />
              Report
            </a>
          )}

          <ShareButton title={props.title} />
        </div>
      </div>
    </div>
  );
}

export default DocsInfo;