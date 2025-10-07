import React from "react";
import { motion } from "framer-motion";
import { coreValues } from "../data/coreValues";
import { fadeInUp, staggerChildren } from "../animations/motionVariants";

const CoreValues = () => (
  <motion.section
    className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <motion.div className="text-center mb-16" {...fadeInUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
          Our Core Values
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
          The principles that guide everything we do
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {coreValues.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              className="text-center group"
              variants={fadeInUp}
            >
              <motion.div
                className="relative mb-6"
                whileHover={{ rotateY: 15, rotateX: 15 }}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl group-hover:shadow-blue-500/25 transition-shadow">
                  <Icon className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </motion.section>
);

export default CoreValues;
