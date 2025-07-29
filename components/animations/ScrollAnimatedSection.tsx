"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default ScrollAnimatedSection;
