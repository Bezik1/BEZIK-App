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

export const IconOutlineSearch = ({ className }: Props): JSX.Element => {
  const { theme } = useThemeContext()

  return (
    <svg className={`icon-outline-search ${className}`} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M18.3567 18.0895L13.112 13.1768M14.8602 9.08296C14.8602 12.2483 12.1207 14.8144 8.74135 14.8144C5.36198 14.8144 2.62247 12.2483 2.62247 9.08296C2.62247 5.91757 5.36198 3.35152 8.74135 3.35152C12.1207 3.35152 14.8602 5.91757 14.8602 9.08296Z" 
        stroke={theme === "light" ? "#000" : "#fff"} 
        stroke-width="2"
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>
  );
};
