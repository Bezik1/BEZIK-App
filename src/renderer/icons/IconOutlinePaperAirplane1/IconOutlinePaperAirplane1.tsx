import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  className: any
  hovered: boolean
}

export const IconOutlinePaperAirplane1 = ({ className, hovered }: Props): JSX.Element => {

  return (
    <motion.svg
      className={`icon-outline-paper-airplane-1 ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        className="path"
        d="M4.50016 10.2532L2.83349 17.6221L17.8335 10.2532L2.83349 2.88416L4.50016 10.2532ZM4.50016 10.2532H11.1668"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: hovered ? [0, 1] : 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      />
    </motion.svg>
  );
};
