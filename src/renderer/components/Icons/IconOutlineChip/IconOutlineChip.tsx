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

export const IconOutlineChip = ({ className }: Props): JSX.Element => {
  const { theme } = useThemeContext()

  return (
    <svg className={`icon-outline-chip ${className}`} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M12.6667 4.18013V6.80022M20.6667 4.18013V6.80022M12.6667 25.1408V27.7609M20.6667 25.1408V27.7609M7.33332 12.0404H4.66666M7.33332 19.9007H4.66666M28.6667 12.0404H26M28.6667 19.9007H26M9.99999 25.1408H23.3333C24.8061 25.1408 26 23.9678 26 22.5207V9.42031C26 7.97327 24.8061 6.80022 23.3333 6.80022H9.99999C8.52723 6.80022 7.33332 7.97327 7.33332 9.42031V22.5207C7.33332 23.9678 8.52723 25.1408 9.99999 25.1408ZM12.6667 12.0404H20.6667V19.9007H12.6667V12.0404Z" 
        stroke={theme === "light" ? "#000" : "#fff"}
        strokeWidth={1.5}
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>

  )
};
