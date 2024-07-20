/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

import { useThemeContext } from "../../../contexts/ThemeContext";

export const IconOutlineWrapper = (): JSX.Element => {
  const { theme } = useThemeContext()

  return (
    <svg className="icon-outline-wrapper" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path strokeWidth={1.5} d="M25.3333 14.4411C25.3333 19.5057 21.1546 23.6114 16 23.6114M16 23.6114C10.8453 23.6114 6.66666 19.5057 6.66666 14.4411M16 23.6114V28.8515M16 28.8515H10.6667M16 28.8515H21.3333M16 18.3712C13.7909 18.3712 12 16.6116 12 14.4411V6.5808C12 4.41024 13.7909 2.65067 16 2.65067C18.2091 2.65067 20 4.41024 20 6.5808V14.4411C20 16.6116 18.2091 18.3712 16 18.3712Z" stroke={theme === "light" ? "#000" : "#fff"} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
};
