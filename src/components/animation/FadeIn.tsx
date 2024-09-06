"use client";

import React from "react";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function FadeIn({ children }: Props) {
  return (
    <motion.div
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ duration: 0.5 }}
      whileInView="visible"
      viewport={{ once: true }}>
      {children}
    </motion.div>
  );
}
