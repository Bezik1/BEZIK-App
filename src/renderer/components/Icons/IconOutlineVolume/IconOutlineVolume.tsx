/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

import { useThemeContext } from "../../../contexts/ThemeContext";

export const IconOutlineVolume = (): JSX.Element => {
  const { theme } = useThemeContext()

  return (
    <svg className="icon-outline-volume" width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M22.2849 12.8874C24.8392 14.9056 24.8392 18.1778 22.2849 20.196M25.985 9.96384C30.5827 13.5967 30.5827 19.4866 25.985 23.1194M9.26926 19.6425H7.19483C6.47236 19.6425 5.88669 19.1798 5.88669 18.6089V14.4745C5.88669 13.9037 6.47236 13.4409 7.19483 13.4409H9.26926L15.4268 8.57568C16.2509 7.92455 17.66 8.3857 17.66 9.30654V23.7769C17.66 24.6978 16.2509 25.1589 15.4268 24.5078L9.26926 19.6425Z" 
        stroke={theme === "light" ? "#000" : "#fff"}
        strokeWidth={1.5}
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>

  )
};
