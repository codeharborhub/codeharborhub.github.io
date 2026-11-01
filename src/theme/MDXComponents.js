import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import AdsComponent from "@site/src/components/AdsComponent";
import BrowserWindow from "@site/src/components/BrowserWindow";
import File from "@site/src/components/File";
import GiscusComponent from "@site/src/components/GiscusComponent";
import Highlight from "@site/src/components/Highlight";
import Lesson from "@site/src/components/Lesson";
import SolutionAuthor from "@site/src/components/SolutionAuthor";
import MDXComponents from "@theme-original/MDXComponents";
import DocCardList from "@theme/DocCardList";
import Image from "@theme/IdealImage";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import { FaReact } from "react-icons/fa";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Comming from "@site/src/components/Comming";
import Admonition from '@theme/Admonition';
import TOCInline from '@theme/TOCInline';
import CodePenEmbed from '@site/src/components/CodePenEmbed';
import CodePreview from '@site/src/components/CodePreview';
import BookmarkButton from "@site/src/components/learning/BookmarkButton";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // custom
  SolutionAuthor,
  Tabs,
  TabItem,
  BrowserWindow,
  Highlight,
  GiscusComponent,
  DocCardList,
  FaReact,
  File,
  Lesson,
  Image,
  LiteYouTubeEmbed,
  AdsComponent,
  Comming,
  Admonition,
  TOCInline,
  CodePenEmbed,
  CodePreview,
  BookmarkButton,
  // <BookmarkButton
  // item={{
  //   id: "html-introduction",
  //   title: "Introduction to HTML",
  //   url: "/tutorials/html/getting-started/what-is-html",
  //   type: "lesson",
  //   courseId: "html-mastery",
  //   description: "Learn HTML fundamentals and how web pages are structured."
  // }}
  // />
};
