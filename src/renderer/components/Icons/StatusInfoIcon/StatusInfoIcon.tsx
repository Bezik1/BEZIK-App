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

export const StatusInfoIcon = ({ className }: Props): JSX.Element => {
  const { theme } = useThemeContext()

  return (
    <svg width="29" className={`status-info-icon ${className}`} height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M16.0513 18.5906H14.6527V13.3504H13.2541M14.6527 8.11026H14.6666M27.2401 13.3504C27.2401 19.8621 21.6045 25.1408 14.6527 25.1408C7.70082 25.1408 2.06525 19.8621 2.06525 13.3504C2.06525 6.83878 7.70082 1.56004 14.6527 1.56004C21.6045 1.56004 27.2401 6.83878 27.2401 13.3504Z" 
        stroke={theme === "light" ? "#000" : "#fff"}
        strokeWidth={1.5}
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>
  )
};
