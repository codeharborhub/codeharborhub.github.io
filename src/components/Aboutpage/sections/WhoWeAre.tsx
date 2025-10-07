import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { fadeInUp } from "../animations/motionVariants";

const WhoWeAre = () => {
  return (
    <motion.section
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 dark:text-white">
            Who We Are
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed dark:text-gray-300">
            <p>
              CodeHarborHub was founded with one vision: everyone deserves access
              to high-quality programming education. Built by passionate developers
              and educators, we aim to bridge the gap between learning and real-world
              industry skills.
            </p>
            <p>
              Our community welcomes learners from all backgrounds — from complete
              beginners taking their first step to seasoned professionals refining
              their craft.
            </p>
            <p>
              What sets us apart? A commitment to hands-on learning, open-source
              collaboration, and building real-world projects that truly make a
              difference.
            </p>
          </div>
        </motion.div>

        {/* Animated Graphic */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="aspect-square bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl p-1">
            <div className="w-full h-full bg-white dark:bg-gray-900 rounded-3xl flex items-center justify-center">
              <motion.div
                className="text-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <Code2 className="w-12 h-12 text-white" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  Empowering Learners Worldwide
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhoWeAre;
