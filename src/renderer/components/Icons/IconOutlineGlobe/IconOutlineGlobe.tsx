/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

import { useThemeContext } from "../../../contexts/ThemeContext";

export const IconOutlineGlobe = (): JSX.Element => {
  const { theme } = useThemeContext()

  return (
    <svg className="icon-outline-globe" width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M24.8089 13.4754C24.8089 18.9018 20.1126 23.3007 14.3194 23.3007M24.8089 13.4754C24.8089 8.04904 20.1126 3.65009 14.3194 3.65009M24.8089 13.4754H3.82985M14.3194 23.3007C8.52616 23.3007 3.82985 18.9018 3.82985 13.4754M14.3194 23.3007C16.2504 23.3007 17.8159 18.9018 17.8159 13.4754C17.8159 8.04904 16.2504 3.65009 14.3194 3.65009M14.3194 23.3007C12.3883 23.3007 10.8229 18.9018 10.8229 13.4754C10.8229 8.04904 12.3883 3.65009 14.3194 3.65009M3.82985 13.4754C3.82985 8.04904 8.52616 3.65009 14.3194 3.65009" 
          stroke={theme === "light" ? "#000" : "#fff"}
          stroke-linecap="round" 
          stroke-linejoin="round"
      />
    </svg>

  )
};
