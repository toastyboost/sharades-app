import styled from "styled-components";

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  opacity: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  &[aria-hidden="true"] {
    opacity: 1;
    z-index: 999;
  }
`;
