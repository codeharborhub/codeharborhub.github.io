import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is CodeHarborHub?",
    answer:
      "CodeHarborHub is an educational platform aimed at providing comprehensive resources for learners at all levels. Whether you're a beginner looking to start your career in web development or an advanced professional wanting to master a new programming language, CodeHarborHub offers tutorials, courses, and a community to support your learning journey.",
  },
  {
    question: "What features does CodeHarborHub offer?",
    answer:
      "CodeHarborHub offers features such as code solutions, project collaboration, coding quizzes, tutorials, and a community section. Our platform is designed to help you learn, share, and grow as a developer.",
  },
  {
    question: "Can I contribute my tutorials here?",
    answer:
      "Yes, users can contribute tutorials by submitting them through a PR with the resources committed.",
  },
  {
    question: "How many types of tutorials are available?",
    answer:
      "CodeHarborHub offers tutorials on HTML, CSS, JavaScript, React, and Node.js, providing a comprehensive guide to web development.",
  },
  {
    question: "What types of courses are available?",
    answer:
      "CodeHarborHub offers courses in HTML, CSS, JavaScript, React, and Node.js. Each course is designed to help you build practical skills and projects.",
  },
  {
    question: "How can I contribute to open-source projects?",
    answer:
      "You can contribute by navigating to the Showcase section, where you can find and join community projects.",
  },
  {
    question: "How can I stay updated with the latest news?",
    answer:
      "You can stay updated by following our blog and joining our community on social media platforms like LinkedIn, YouTube, Discord, and Twitter.",
  },
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col justify-center items-center gap-x-8 gap-y-12 xl:gap-28 lg:flex-row lg:justify-between">
          {/* Left: Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="/img/ajay-dhangar.jpg"
              alt="FAQ Section"
              className="w-full rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* Right: FAQ Section */}
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-8 lg:mb-16">
                <h6 className="text-lg text-center lg:text-left font-medium text-indigo-600 mb-2">
                  FAQs
                </h6>
                <h2 className="text-4xl text-center lg:text-left font-bold text-gray-900 dark:text-gray-100 leading-snug">
                  Looking for answers?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center lg:text-left">
                  Find answers to the most common questions about CodeHarborHub.
                </p>
              </div>

              {/* Accordion */}
              <div>
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="accordion border-b border-gray-200 dark:border-gray-700 pb-4 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      className="accordion-toggle group flex justify-between items-center text-lg font-medium text-gray-700 dark:text-gray-200 w-full transition-all duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      {faq.question}
                      <motion.span
                        className="transform transition-transform duration-300"
                        animate={{
                          rotate: activeIndex === index ? 180 : 0,
                        }}
                      >
                        <FiChevronDown size={22} />
                      </motion.span>
                    </button>
                    <motion.div
                      className="accordion-content overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: activeIndex === index ? "auto" : 0,
                        opacity: activeIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="mt-2 text-gray-600 dark:text-gray-400 text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
