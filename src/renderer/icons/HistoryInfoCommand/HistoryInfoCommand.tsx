/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const HistoryInfoCommand = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_43_86)">
        <path
          className="path"
          d="M11.5385 13.7555H10.4895V9.82533H9.44056M10.4895 5.8952H10.5M19.9301 9.82533C19.9301 14.7091 15.7034 18.6681 10.4895 18.6681C5.27563 18.6681 1.04895 14.7091 1.04895 9.82533C1.04895 4.94159 5.27563 0.982536 10.4895 0.982536C15.7034 0.982536 19.9301 4.94159 19.9301 9.82533Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_43_86">
          <rect className="rect" fill="white" height="19.6507" width="20.979" />
        </clipPath>
      </defs>
    </svg>
  );
};
