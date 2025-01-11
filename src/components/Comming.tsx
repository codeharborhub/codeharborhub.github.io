import React from "react";

/**
 * The `Comming` component renders a maintenance page with a message indicating that the site is under maintenance.
 * It includes an image, a heading, a paragraph, and two action buttons ("Contact Us" and "Reload").
 *
 * @returns {JSX.Element} A JSX element representing the maintenance page.
 */

const Comming = (): JSX.Element => {
  return (
    <body className="bg-gray-100 dark:bg-gray-800">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <img
          src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
          alt="Logo"
          className="mb-8 h-40"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
          Site is under maintenance
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
          We're working hard to improve the user experience. Stay tuned!
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white"
          >
            Reload
          </a>
        </div>
      </div>
    </body>
  );
};

export default Comming;
