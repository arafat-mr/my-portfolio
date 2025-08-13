import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-10/12 mx-auto px-6 py-12 text-center"
    >
      <h2
        className="
          text-4xl font-extrabold mb-8
          bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
          bg-clip-text text-transparent select-none
          drop-shadow-lg
        "
      >
        About Me
      </h2>

      <p
        className="
          text-lg md:text-xl font-medium
          bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent
          leading-relaxed
          max-w-6xl mx-auto z-10 relative
        "
      >
       My programming journey started with a strong passion and curiosity to create. While working a full-time job, I’m learning full-stack development step by step, enjoying projects that help me grow. Outside coding, I love playing football to stay active and refreshed. I’m motivated, trying to do better and excited for what’s ahead.
      </p>
    </motion.section>
  );
}
