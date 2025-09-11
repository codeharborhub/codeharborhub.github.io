import React from 'react'
import clsx from 'clsx'
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common'
import {
  useBlogAuthorPageTitle,
  BlogAuthorsListViewAllLabel
} from '@docusaurus/theme-common/internal'
import Link from '@docusaurus/Link'
import { useBlogMetadata } from '@docusaurus/plugin-content-blog/client'
import BlogLayout from '@theme/BlogLayout'
import BlogListPaginator from '@theme/BlogListPaginator'
import SearchMetadata from '@theme/SearchMetadata'
import BlogPostItems from '@theme/BlogPostItems'
import Author from '@theme/Blog/Components/Author'
import Head from "@docusaurus/Head";

function Metadata({ author }) {
  const title = useBlogAuthorPageTitle(author)
  return (
    <>
      <PageMetadata title={title} />
      <SearchMetadata tag='blog_authors_posts' />
    </>
  )
}

function ViewAllAuthorsLink() {
  const { authorsListPath } = useBlogMetadata()
  return (
    <Link href={authorsListPath}>
      <BlogAuthorsListViewAllLabel />
    </Link>
  )
}

function Content({ author, items, sidebar, listMetadata }) {
  return (
    <BlogLayout sidebar={sidebar}>
      <header className='margin-bottom--xl'>
        <Author as='h2' author={author} />
        {author.description && <p>{author.description}</p>}
        <ViewAllAuthorsLink />
      </header>
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={listMetadata} />
    </BlogLayout>
  )
}

export default function BlogAuthorsPostsPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogAuthorsPostsPage)}
    >
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
          crossOrigin="anonymous"
        />
        <script
          async
          custom-element="amp-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
        />
        <meta name="google-adsense-account" content="ca-pub-5832817025080991" />
      </Head>
      <Metadata {...props} />
      <Content {...props} />
    </HtmlClassNameProvider>
  )
}
