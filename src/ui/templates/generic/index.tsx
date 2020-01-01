import * as React from "react";

import { GenericContainer } from "./styles";

export const GenericTemplate: React.FC = ({ children }) => (
  <GenericContainer>{children}</GenericContainer>
);
