import React from "react";
import { useLocation } from "react-router-dom";
import { useColorMode } from "@docusaurus/theme-common";
import {
  FiShare2,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiMail,
} from "react-icons/fi";
import styles from "./shareButton.module.css";

function ShareButton({ title }) {
  const location = useLocation();
  const { colorMode } = useColorMode();
  const baseUrl = "https://codeharborhub.github.io";
  const fullUrl = baseUrl + location.pathname;

  const shareLinks = [
    {
      name: "Twitter",
      url: `https://twitter.com/share?url=${fullUrl}&text=Check out this article on ${title}&hashtags=codeharborhub,opensource`,
      icon: <FiTwitter />,
      color: "#1DA1F2",
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&source=CodeHarborHub`,
      icon: <FiLinkedin />,
      color: "#0A66C2",
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`,
      icon: <FiFacebook />,
      color: "#1877F2",
    },
    {
      name: "Email",
      url: `mailto:?subject=Shared Article | ${title} | CodeHarborHub Docs&body=Check out this article on ${title}: ${fullUrl}`,
      icon: <FiMail />,
      color: "#D44638",
    },
  ];

  return (
    <div className={styles.dropdown}>
      <button className={styles.trigger} aria-label="Share this page">
        <FiShare2 className={styles.shareIcon} />
        <span className={styles.label}>Share</span>
      </button>

      <ul className={styles.menu}>
        {shareLinks.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.menuItem}
              style={{
                "--hover-color": colorMode === "dark" ? "#ffffff" : item.color
              }}
            >
              <span className={styles.icon}>{item.icon}</span>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShareButton;