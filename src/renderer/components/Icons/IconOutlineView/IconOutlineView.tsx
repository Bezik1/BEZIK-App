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

export const IconOutlineView = ({ className }: Props): JSX.Element => {
  const { theme } = useThemeContext()

  return (
    <svg className={`icon-outline-view ${className}`} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path strokeWidth={1.5} d="M6 7.89084C6 6.44381 7.19391 5.27075 8.66667 5.27075H11.3333C12.8061 5.27075 14 6.44381 14 7.89084V10.5109C14 11.958 12.8061 13.131 11.3333 13.131H8.66667C7.19391 13.131 6 11.958 6 10.5109V7.89084Z" stroke={theme === "light" ? "#000" : "#fff"} stroke-linecap="round" stroke-linejoin="round"/>
      <path strokeWidth={1.5} d="M19.3333 7.89084C19.3333 6.44381 20.5272 5.27075 22 5.27075H24.6667C26.1394 5.27075 27.3333 6.44381 27.3333 7.89084V10.5109C27.3333 11.958 26.1394 13.131 24.6667 13.131H22C20.5272 13.131 19.3333 11.958 19.3333 10.5109V7.89084Z" stroke={theme === "light" ? "#000" : "#fff"} stroke-linecap="round" stroke-linejoin="round"/>
      <path strokeWidth={1.5} d="M6 20.9913C6 19.5442 7.19391 18.3712 8.66667 18.3712H11.3333C12.8061 18.3712 14 19.5442 14 20.9913V23.6114C14 25.0584 12.8061 26.2315 11.3333 26.2315H8.66667C7.19391 26.2315 6 25.0584 6 23.6114V20.9913Z" stroke={theme === "light" ? "#000" : "#fff"} stroke-linecap="round" stroke-linejoin="round"/>
      <path strokeWidth={1.5} d="M19.3333 20.9913C19.3333 19.5442 20.5272 18.3712 22 18.3712H24.6667C26.1394 18.3712 27.3333 19.5442 27.3333 20.9913V23.6114C27.3333 25.0584 26.1394 26.2315 24.6667 26.2315H22C20.5272 26.2315 19.3333 25.0584 19.3333 23.6114V20.9913Z" stroke={theme === "light" ? "#000" : "#fff"} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
