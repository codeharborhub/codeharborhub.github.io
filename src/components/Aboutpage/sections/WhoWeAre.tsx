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
      <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-900 pb-8 dark:text-white">
        Who We Are
      </h2>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
         <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl p-1">
            <div className="w-full bg-white dark:bg-gray-900 rounded-3xl flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3w5dHx8MHx8fGFsbHwxfHx8fHww&auto=format&fit=crop&w=600&q=80"
                alt="Vision Illustration"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>
        {/* Text */}
        <motion.div {...fadeInUp}>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed dark:text-gray-300">
            <p>
              We at CodeHarborHub are a global community of enthusiastic
              researchers, developers, and innovators committed to ensuring that
              everyone has access to technology. We offer an open platform where
              people can learn, develop, and work together through practical
              projects and experiences, all based on the idea that knowledge
              should be shared rather than restricted.
            </p>
            <p>
              Our goal is to help students become proficient developers and
              creators who can transform their ideas into meaningful solutions
              by bridging the gap between education and innovation.
              CodeHarborHub provides the resources, guidance, and tools you need
              to advance with confidence, whether your goal is to learn AI,
              explore web development, or contribute to open-source.
            </p>
          </div>
        </motion.div>       
      </div>
    </motion.section>
  );
};

export default WhoWeAre;
