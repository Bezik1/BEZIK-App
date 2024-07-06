import { SoundIcon } from ".";

export default {
  title: "Components/SoundIcon",
  component: SoundIcon,
  argTypes: {
    state: {
      options: ["step-4", "step-1", "step-5", "end", "step-2", "step-3", "start"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "step-4",
    className: {},
    soundLineClassName: {},
    soundLineClassNameOverride: {},
    divClassName: {},
    divClassNameOverride: {},
    soundLineClassName1: {},
  },
};
