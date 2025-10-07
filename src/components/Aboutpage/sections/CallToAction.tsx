import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Star } from "lucide-react";
import { contributors } from "../data/contributors";
import { fadeInUp, scaleOnHover } from "../animations/motionVariants";

const CallToAction = () => (
  <motion.section
    className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
      <motion.div {...fadeInUp}>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Start Your
          <br />
          <span className="text-yellow-300">Coding Journey?</span>
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join thousands of learners transforming their careers with
          CodeHarborHub. Your future in tech starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            {...scaleOnHover}
          >
            Start Learning Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="mr-2 w-5 h-5" />
            Join Our Community
          </motion.button>
        </div>

        {/* Contributors */}
        <motion.div
          className="mt-12 flex justify-center items-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex -space-x-2">
            {contributors.map((c, i) => (
              <motion.div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-purple-500"
                whileHover={{ scale: 1.2, zIndex: 10 }}
              >
                <img src={c.avatar} alt={c.name} className="rounded-full w-full" />
              </motion.div>
            ))}
          </div>
          <div className="text-white/90">
            <div className="flex items-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
              ))}
            </div>
            <p className="text-sm">Trusted by 50,000+ learners</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default CallToAction;
