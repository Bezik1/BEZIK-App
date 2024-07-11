/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import { motion } from "framer-motion";

import ICON_PATH from "../../../assets/img/icon-outline-terminal.svg"

interface Props {
  className: any;
  hovered?: boolean
  stokeWidth?: number
}

export const IconOutline = ({ className, hovered, stokeWidth=1 }: Props): JSX.Element => {
  
  return (
  <motion.svg 
    className={className}
    width="28" 
    height="27" 
    viewBox="0 0 28 27" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path 
      d="M9.55559 10.3624L12.8889 13.6375L9.55559 16.9127M15.1111 16.9127H18.4445M6.22225 22.3712H21.7778C23.0051 22.3712 24 21.3936 24 20.1878V7.08733C24 5.88147 23.0051 4.90392 21.7778 4.90392H6.22225C4.99495 4.90392 4.00003 5.88147 4.00003 7.08733V20.1878C4.00003 21.3936 4.99495 22.3712 6.22225 22.3712Z" 
      stroke="#fff" 
      stroke-linecap="round" 
      strokeWidth={stokeWidth}
      stroke-linejoin="round"
      initial={{ pathLength: 1 }}
      animate={{ pathLength: hovered ? [0, 1] : 1 }}
      key={hovered ? "hovered-terminal" : "not-hovered-terminal"}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  </motion.svg>
  )
};
