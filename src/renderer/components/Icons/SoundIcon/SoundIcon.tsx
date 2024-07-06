/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  state: "step-4" | "step-1" | "step-5" | "end" | "step-2" | "step-3" | "start";
  className: any;
  soundLineClassName: any;
  soundLineClassNameOverride: any;
  divClassName: any;
  divClassNameOverride: any;
  soundLineClassName1: any;
}

export const SoundIcon = ({
  state,
  className,
  soundLineClassName,
  soundLineClassNameOverride,
  divClassName,
  divClassNameOverride,
  soundLineClassName1,
}: Props): JSX.Element => {
  return (
    <div className={`sound-icon ${className}`}>
      <div className={`sound-line ${state} ${soundLineClassName}`} />
      <div className={`sound-line-1 state-${state} ${soundLineClassNameOverride}`} />
      <div className={`sound-line-2 state-${state} ${divClassName}`} />
      <div className={`sound-line-3 state-${state} ${divClassNameOverride}`} />
      <div className={`sound-line-4 state-${state} ${soundLineClassName1}`} />
    </div>
  );
};

SoundIcon.propTypes = {
  state: PropTypes.oneOf(["step-4", "step-1", "step-5", "end", "step-2", "step-3", "start"]),
};
