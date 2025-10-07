import React from "react";
import { motion } from "framer-motion";
import { offerings } from "../data/offerings";
import { fadeInUp, scaleOnHover, staggerChildren } from "../animations/motionVariants";

const Offerings = () => (
  <motion.section
    className="py-24 bg-white dark:bg-gray-900"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <motion.div className="text-center mb-16" {...fadeInUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
          What We Offer
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
          Comprehensive resources designed to accelerate your learning journey
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {offerings.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              {...scaleOnHover}
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </motion.section>
);

export default Offerings;
