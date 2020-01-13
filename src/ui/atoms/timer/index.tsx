import * as React from "react";

import { CountdownContainer } from "./styles";

type TimerProps = {
  className?: string;
  time: number;
};

export const Timer: React.FC<TimerProps> = ({ className, time }) => {
  return (
    <CountdownContainer time={time} className={className}>
      <span>{time}</span>
      <svg>
        <circle r="36" cx="40" cy="40" style={{ strokeDashoffset: `-${(226 / 100) * time}px` }} />
      </svg>
    </CountdownContainer>
  );
};
