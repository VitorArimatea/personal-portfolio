"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./styles.module.scss";

export default function Index(): React.ReactNode {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setHeight(window.innerHeight);

    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (height === 0) return null;

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${
    height / 2
  } 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${
    height / 2
  } 100 0`;

  const curve: Variants = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
}
