import React from "react";
import { motion } from "framer-motion";
import { Target, Rocket } from "lucide-react";
import { fadeInUp } from "../animations/motionVariants";

const MissionVision = () => {
  return (
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
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Driven by purpose, guided by innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <motion.div
            className="group"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-10 rounded-3xl border border-blue-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-blue-600 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed dark:text-gray-300">
                To democratize quality programming education by providing
                accessible, comprehensive, and practical learning resources
                that empower individuals to transform their careers and
                contribute to the tech community.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="group"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-10 rounded-3xl border border-purple-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-purple-600 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed dark:text-gray-300">
                To become the world’s most trusted platform for learning
                programming, fostering a global community where knowledge is
                shared freely and every learner has the opportunity to reach
                their full potential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionVision;