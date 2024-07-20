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

export const IconOutlineX = ({ className }: Props): JSX.Element => {
  const { theme } = useThemeContext()

  return (
    <svg className={`icon-outline-x ${className}`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 23.6114L24 7.89084M8 7.89084L24 23.6114" stroke={theme === "light" ? "#000" : "#fff"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
};
