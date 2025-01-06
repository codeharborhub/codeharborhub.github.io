import React from "react";
import Link from "@docusaurus/Link";

//  #0a0a0a;
// #ededed;

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
          <img
            alt="Next.js logo"
            width={160}
            height={160}
            src="/icons/next-light.svg"
          />

          <ol className="list-inside list-decimal text-sm sm:text-left">
            <li className="mb-4">
              Get started by editing{" "}
              <code className="text-gray-700 p-1 rounded-md dark:text-gray-300">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#0a0a0a] text-gray-200 gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              to="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img                
                alt="Vercel logomark"
                width={20}
                height={20}
                src="/icons/vercel.svg"
              />
              &nbsp; Deploy now
            </Link>
            <Link
              className="rounded-full border border-solid border-gray-300 transition-colors flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              to="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </Link>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Link
            className="flex items-center hover:underline hover:underline-offset-4 text-white"
            to="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              aria-hidden
              alt="File icon"
              width={16}
              height={16}
              src="/icons/file.svg"
              className="mr-2"
            />
            &nbsp; Learn
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            to="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              aria-hidden
              alt="Window icon"
              width={16}
              height={16}
              src="/icons/window.svg"
            />
            &nbsp; Examples
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            to="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              aria-hidden
              alt="Globe icon"
              width={16}
              height={16}
              src="/icons/globe.svg"
            />
            &nbsp; Go to nextjs.org →
          </Link>
        </footer>
      </div>
    </div>
  );
}
