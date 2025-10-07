import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import { teamMembers } from "../data/teamMembers";
import { fadeInUp, staggerChildren } from "../animations/motionVariants";

const TeamSection = () => (
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
          Meet Our Team
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
          Passionate educators and developers dedicated to your success
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="text-center group"
            variants={fadeInUp}
            whileHover={{ y: -10 }}
          >
            <div className="relative mb-6">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1 dark:text-white">
              {member.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {member.role}
            </p>
            <div className="flex justify-center space-x-3">
              <a href={member.social.github}>
                <Github className="w-5 h-5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
              <a href={member.social.twitter}>
                <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
              <a href={member.social.linkedin}>
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default TeamSection;
