/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";

interface Props {
  state: "step-4" | "step-1" | "step-5" | "end" | "step-2" | "step-3" | "start";
  className: any;
  soundLineClassName: any;
  soundLineClassNameOverride: any;
  divClassName: any;
  divClassNameOverride: any;
  soundLineClassName1: any;
}

export const SoundIcon = ({
  className,
  soundLineClassName,
  soundLineClassNameOverride,
  divClassName,
  divClassNameOverride,
  soundLineClassName1,
}: Props): JSX.Element => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className={`sound-icon ${className}`} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      <motion.div 
        className={`sound-line ${soundLineClassName}`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: [1, hovered ? 1.3 : 1, 1] }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, }}
      />
      <motion.div 
        className={`sound-line-1 ${soundLineClassNameOverride}`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: [1, hovered ? 1.3 : 1, 1] }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.div 
        className={`sound-line-2 ${divClassName}`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: [1, hovered ? 1.3 : 1, 1] }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.div 
        className={`sound-line-3 ${divClassNameOverride}`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: [1, hovered ? 1.3 : 1, 1] }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <motion.div 
        className={`sound-line-4 ${soundLineClassName1}`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: [1, hovered ? 1.3 : 1, 1] }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      />
    </div>
  );
};