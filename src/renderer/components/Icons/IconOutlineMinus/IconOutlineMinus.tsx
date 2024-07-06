/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import ICON_PATH from "../../../assets/img/icon.svg"

interface Props {
  className: any;
}

export const IconOutlineMinus = ({ className }: Props): JSX.Element => {
  return (
    <div className={`icon-outline-minus ${className}`}>
      <img className="icon" alt="Icon" src={ICON_PATH} />
    </div>
  );
};
