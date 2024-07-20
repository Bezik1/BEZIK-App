import React from "react";
import { motion } from "framer-motion";
import { useThemeContext } from "../../contexts/ThemeContext";

interface Props {
  className: string;
}

export const Line = ({ className }: Props): JSX.Element => {
  const { theme } = useThemeContext()
  
  return (
    <svg
      className={`line ${className}`}
      fill="none"
      height="507"
      viewBox="0 0 408 507"
      width="408"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={theme === "light" ? "#000" : "#fff"} />
          <stop offset="100%" stopColor={theme === "light" ? "#000" : "#fff"} />
        </linearGradient>
      </defs>
      <motion.path
        d="M0.793989 0.0829315C-8.80601 88.1179 71.0162 175.629 112.127 208.38C141.683 231.306 195.994 284.1 176.794 311.873C152.794 346.59 20.794 370.17 72.1273 417.987C113.194 456.24 312.794 492.878 407.461 506.415"
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.4, 0.7, 1],
          repeat: Infinity,
        }}
      />
    </svg>
  );
};
