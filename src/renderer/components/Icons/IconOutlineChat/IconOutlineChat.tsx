/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

import { useThemeContext } from "../../../contexts/ThemeContext";

export const IconOutlineChat = (): JSX.Element => {
  const { theme } = useThemeContext()

  return (
    <svg className="icon-outline-chat" width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M15.2952 17.8222H15.3075M20.2008 17.8222H20.213M25.1063 17.8222H25.1186M16.5216 25.12H11.6161C10.2614 25.12 9.1633 24.0309 9.1633 22.6874V12.957C9.1633 11.6135 10.2614 10.5243 11.6161 10.5243H28.7855C30.1401 10.5243 31.2382 11.6135 31.2382 12.957V22.6874C31.2382 24.0309 30.1401 25.12 28.7855 25.12H22.6535L16.5216 31.2015V25.12Z" 
        stroke={theme === "light" ? "#000" : "#fff"} 
        strokeWidth={1.5}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

  )
};
