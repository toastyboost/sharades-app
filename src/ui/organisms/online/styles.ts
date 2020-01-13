import styled from "styled-components";

export const OnlineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  background: rgba(0, 0, 0, 0.1);
  margin: 0.6rem;
  border-radius: 3px;
  font-size: 2.4rem;
  letter-spacing: -2px;
  position: relative;

  &:before {
    content: "💬";
    position: absolute;
    top: -8px;
    right: -12px;
    font-size: 1.6rem;
    transition: 0.1s;
  }

  &[data-typing="false"] {
    &:before {
      opacity: 0;
    }
  }

  &[data-typing="true"] {
    &:before {
      opacity: 1;
    }
  }
`;

export const Host = styled(UserAvatar)`
  position: relative;

  &:before {
    content: "👑";
    position: absolute;
    top: -17px;
    font-size: 3rem;
    left: auto;
    right: auto;
    margin: 0 auto;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -16px;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  width: 5.6rem;
  height: 5.6rem;
  font-size: 3.6rem;
  margin-bottom: 24px;
`;
