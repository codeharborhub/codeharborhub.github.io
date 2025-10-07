import React from "react";
import { motion } from "framer-motion";
import { Code2, Users, Rocket, BookOpen } from "lucide-react";
import { fadeInUp } from "../animations/motionVariants";

const Hero = () => (
  <motion.section
    className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
      <motion.div className="mb-8" {...fadeInUp}>
        <motion.div
          className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8 dark:bg-gray-800/20 dark:border-gray-700/30"
          whileHover={{ scale: 1.05 }}
        >
          <Code2 className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Welcome to CodeHarborHub
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
          About CodeHarborHub
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed dark:text-gray-300">
          Empowering Learners, Building Future Innovators
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {[Code2, Users, Rocket, BookOpen].map((Icon, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 dark:bg-gray-800/20 dark:border-gray-700/30"
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Hero;
