import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen">
      <motion.p
        initial={{ opacity: 0, y:-400 }}
        animate={{ scale: 1.5, opacity: 1, y:0, transition: { duration: 2 } }}
        className="m-auto text-3xl"
      >
        Welcome Home
      </motion.p>
    </div>
  );
}
