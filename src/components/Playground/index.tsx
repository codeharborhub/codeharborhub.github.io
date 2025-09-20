import React from "react";
import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

export default function ComingSoonPlayground() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-lg rounded-3xl border border-neutral-200
                   bg-white/70 p-10 text-center shadow-2xl backdrop-blur-sm
                   dark:border-neutral-700 dark:bg-neutral-900/70"
      >
        {/* Animated Glow */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-1 rounded-3xl bg-gradient-to-r
                     from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-2xl"
        />

        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.05, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative mx-auto flex h-20 w-20 items-center justify-center
                     rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl"
        >
          <FiClock className="h-10 w-10 text-white" />
        </motion.div>

        {/* Title */}
        <h1 className="relative mt-6 text-3xl font-extrabold tracking-tight
                       text-neutral-900 dark:text-neutral-100">
          Playground Coming Soon
        </h1>

        {/* Description */}
        <p className="relative mt-4 text-neutral-600 dark:text-neutral-400">
          We’re crafting an interactive browser playground where you can
          explore CodeHarborHub demos instantly. Stay tuned for the launch!
        </p>

        {/* Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="relative mt-8 inline-block rounded-xl bg-gradient-to-r
                     from-indigo-500 to-purple-600 px-6 py-3 font-semibold
                     text-white shadow-lg transition hover:from-indigo-600
                     hover:to-purple-700"
        >
          Notify Me
        </motion.a>
      </motion.div>
    </div>
  );
}
