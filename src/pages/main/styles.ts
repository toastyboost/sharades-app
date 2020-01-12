import styled from "styled-components";

import { Field } from "ui/atoms";

export const MainContainer = styled.div`
  display: flex;
`;

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const Aside = styled.aside`
  width: 100%;
  max-width: 320px;
  height: calc(100vh - 72px);
  background-color: var(--block-bg);
  position: absolute;
  right: 120px;
  top: 0;
  bottom: 0;
  margin: 36px;
  border-radius: 5px;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const RightPanel = styled.div`
  width: 120px;
  height: calc(100vh - 124px);
  background-color: var(--primary);
  position: absolute;
  right: 0;
  margin: 62px 36px;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
`;

export const MessageField = styled(Field)`
  font-size: 1.6rem;
  line-height: 8vh;
  padding: 0 24px 0 60px;
  width: 100%;
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  font-size: 2.4rem;
  letter-spacing: -2px;
  position: absolute;
  z-index: 100;
  top: 12px;
  left: 12px;
`;

export const FormSubmit = styled.input`
  font-size: 1.4rem;
  line-height: 1em;
  min-height: 5vh;
  background-color: var(--primary);
  color: #fff;
  padding: 0 12px;
  border-radius: 3px;
  position: absolute;
  right: 12px;
  transition: 0.3s;

  &[aria-disabled="true"] {
    opacity: 0.7;
  }

  &[aria-disabled="false"] {
    opacity: 1;
  }
`;
