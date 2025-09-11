import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import SearchMetadata from "@theme/SearchMetadata";
import BlogPostItems from "@theme/BlogPostItems";
import Image from "@theme/IdealImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { BlogPagination } from "../BlogPagination";

function BlogListPageMetadata(props) {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogHomepageBanner(props) {
  const blogMetadata = props.metadata;
  const imageDefault = {
    urlBannerBg: "/img/banner-2.png",
    urlAvatar: "/img/avatar.jpg",
  };

  return (
    <div className="blog">
      <div className="relative flex justify-center items-center mb-4">
        <Image
          img={useBaseUrl(imageDefault.urlBannerBg)}
          alt="Blog banner"
          className="w-full rounded-lg shadow-md object-cover h-48 md:h-64 lg:h-80"
          loading="lazy"
        />
        <Image
          img={useBaseUrl(imageDefault.urlAvatar)}
          alt="avatar blog"
          className="absolute rounded-full border-4 border-white bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-white p-1 shadow-lg"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
      <div className="text-center mb-8 mt-12 px-4">
        <h2 className="mb-2 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
          {blogMetadata.blogTitle}
        </h2>
        <p className="text-md mx-auto max-w-2xl lg:text-lg">
          {blogMetadata.blogDescription}
        </p>
      </div>
    </div>
  );
}

function BlogListPageContent(props) {
  const { metadata, items, sidebar } = props;

  return (
    <BlogLayout sidebar={sidebar}>
      <BlogHomepageBanner {...props} />
      <BlogPostItems items={items} />
      <BlogPagination metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
