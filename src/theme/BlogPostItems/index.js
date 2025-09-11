import React from "react";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

import BlogPostItem from "@theme/BlogPostItem";
import TagsListInline from "@theme/TagsListInline";

import TimeStamp from "../../components/TimeStamp";
import { Avatar } from "../../components/ui/avatar";
import { Card, CardContent, CardFooter } from "../../components/ui/card";

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((blog) => (
        <div key={blog.content.metadata.permalink} className="flex">
          <Card className="bg-gray-100 flex w-full flex-col border-0 shadow-none">
            <Link
              to={blog.content.metadata.permalink}
              className="overflow-hidden transition-opacity hover:opacity-90"
            >
              <Image
                className="block h-auto w-full rounded-lg object-cover"
                img={useBaseUrl(blog.content.metadata.frontMatter.image)}
                alt={blog.content.metadata.title}
                loading="lazy"
              />
            </Link>

            <CardContent className="mt-2 p-4">
              <Link to={blog.content.metadata.permalink} className="mt-4">
                <p className="mb-1 p-0 text-xl font-semibold">
                  {blog.content.metadata.title.slice(0, 60) +
                    (blog.content.metadata.title.length > 60 ? "..." : "")}
                </p>
              </Link>

              <p className="mb-4 mt-2 line-clamp-2 dark:text-gray-400">
                {blog.content.metadata.description.slice(0, 120) +
                  (blog.content.metadata.description.length > 120 ? "..." : "")}
              </p>
              <div className="my-2 flex flex-wrap items-center gap-2">
                {blog.content.metadata.authors.map((author, index) => (
                  <Link
                    href={author.page.permalink}
                    title={author.name}
                    key={index}
                    className="transition-opacity hover:opacity-80"
                  >
                    <Avatar>
                      <Image
                        alt={author.name}
                        img={useBaseUrl(author.imageURL)}
                        className="aspect-square h-full w-full"
                      />
                    </Avatar>
                  </Link>
                ))}

                <div className="text-sm dark:text-gray-400 flex items-center gap-1">
                  <span>
                    <TimeStamp timestamp={blog.content.metadata.date} />
                  </span>
                  <span className="mx-2">
                    &#183;
                  </span>
                  <span>
                    {Math.ceil(blog.content.metadata.readingTime)} min read
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="px-2">
              {blog.content.metadata.tags.length > 0 && (
                <div className="blog-tags flex flex-wrap gap-2">
                  <TagsListInline tags={blog.content.metadata.tags} />
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
