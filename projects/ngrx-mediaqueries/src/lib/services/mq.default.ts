import { NgrxMQModels } from "../models/mq.model";

export const ngrxMediaQueriesDefault: NgrxMQModels.List = {
  xxsmall: "(min-width:375px)",
  xsmall: "(min-width:480px)",
  small: "(min-width:600px)",
  medium: "(min-width:768px)",
  large: "(min-width:1024px)",
  xlarge: "(min-width:1280px)",
  xxlarge: "(min-width:1440px)",
  portrait: "(orientation: portrait)",
  landscape: "(orientation: landscape)",
  speech: "speech",
  touchscreen: "(hover: none) and (pointer: coarse)",
  highres: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
};
