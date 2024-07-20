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

export const IconOutlineServer = ({ className }: Props): JSX.Element => {
  const { theme } = useThemeContext()

  return (
    <svg className={`icon-outline-server ${className}`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path strokeWidth={1.5} d="M6.66664 15.7511H25.3333M6.66664 15.7511C5.19388 15.7511 3.99997 14.578 3.99997 13.131V7.89084C3.99997 6.44381 5.19388 5.27075 6.66664 5.27075H25.3333C26.8061 5.27075 28 6.44381 28 7.89084V13.131C28 14.578 26.8061 15.7511 25.3333 15.7511M6.66664 15.7511C5.19388 15.7511 3.99997 16.9242 3.99997 18.3712V23.6114C3.99997 25.0584 5.19388 26.2315 6.66664 26.2315H25.3333C26.8061 26.2315 28 25.0584 28 23.6114V18.3712C28 16.9242 26.8061 15.7511 25.3333 15.7511M22.6666 10.5109H22.68M22.6666 20.9913H22.68" stroke={theme === "light" ? "#000" : "#fff"} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
};
