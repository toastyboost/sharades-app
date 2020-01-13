import styled from "styled-components";

const sircleSize = 226;

export const CountdownContainer = styled.div<{ time: number }>`
  svg {
    width: 80px;
    height: 80px;
    transform: rotateY(-180deg) rotateZ(-90deg);
  }

  circle {
    stroke-dasharray: ${sircleSize}px;
    stroke-linecap: round;
    stroke-width: 6px;
    stroke: var(--green);
    fill: none;
    transition: 0.3s all;
  }

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`;
