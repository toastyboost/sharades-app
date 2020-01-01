import * as React from "react";

import { OverlayContainer } from "./styles";

type OverlayProps = {
  onClick?: () => void;
};

export const Overlay: React.FC<OverlayProps> = props => <OverlayContainer {...props} />;
