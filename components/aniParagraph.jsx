"use client";
import { motion } from "framer-motion";

export default function AniParagraph({ text, triggerKey }) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.p
      key={triggerKey}
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{ textAlign: "center" }}>
      {text}
    </motion.p>
  );
}
