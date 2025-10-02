import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import AdsComponent from "@site/src/components/AdsComponent";
import Author from "@site/src/components/Author";
import BrowserWindow from "@site/src/components/BrowserWindow";
import CollectionList from "@site/src/components/CollectionList";
import Contributors from "@site/src/components/Contributors";
import Courses from "@site/src/components/Courses";
import File from "@site/src/components/File";
import GiscusComponent from "@site/src/components/GiscusComponent";
import Highlight from "@site/src/components/Highlight";
import Lesson from "@site/src/components/Lesson";
import SolutionAuthor from "@site/src/components/SolutionAuthor";
import Table from "@site/src/components/Table";
import TutorialAuthors from "@site/src/components/TutorialAuthors";
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

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // custom
  SolutionAuthor,
  Tabs,
  TabItem,
  TutorialAuthors,
  Table,
  Contributors,
  BrowserWindow,
  Highlight,
  GiscusComponent,
  CollectionList,
  DocCardList,
  FaReact,
  Courses,
  File,
  Lesson,
  Image,
  LiteYouTubeEmbed,
  Author,
  AdsComponent,
  Comming,
  Admonition,
  TOCInline,
};
