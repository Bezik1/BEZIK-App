/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

import ICON_PATH from "../../../assets/img/status-info-icon.svg"

interface Props {
  className: any;
}

export const StatusInfoIcon = ({ className }: Props): JSX.Element => {
  return <img className={`status-info-icon ${className}`} alt="Status info icon" src={ICON_PATH} />;
};
