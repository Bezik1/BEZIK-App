/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

import ICON_PATH from "../../../assets/img/icon-outline-view-grid.svg"

interface Props {
  className: any;
}

export const IconOutlineView = ({ className }: Props): JSX.Element => {
  return (
    <img className={`icon-outline-view ${className}`} alt="Icon outline view" src={ICON_PATH} />
  );
};
