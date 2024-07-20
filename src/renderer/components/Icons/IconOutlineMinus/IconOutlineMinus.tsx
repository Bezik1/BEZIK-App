/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import { useThemeContext } from "../../../contexts/ThemeContext";

interface Props {
  className: any;
}

export const IconOutlineMinus = ({ className }: Props): JSX.Element => {
  const { theme } = useThemeContext()

  return (
    <div className={`icon-outline-minus ${className}`}>
      <svg className="icon" width="24" height="3" viewBox="0 0 24 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.6666 1.7511H1.33331" stroke={theme === "light" ? "#000" : "#fff"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

  )
};
