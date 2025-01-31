/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: string;
  status: number
}

export const LightBulb = ({ className, status }: Props): JSX.Element => {
  return (
    <div className={`light-bulb ${className}`}>
      <div className="overlap-group">
        <div className={`ellipse ${status !== 200 && 'bulb-disabled'}`} />
        <div className={`ellipse-2 ${status !== 200 && 'bulb-disabled'}`} />
      </div>
    </div>
  );
};
