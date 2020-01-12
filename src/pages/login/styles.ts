import styled from "styled-components";

import { Field } from "ui/atoms";

export const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--primary);
`;

export const LoginField = styled(Field)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  input {
    text-align: center;
    width: 64px;
    height: 64px;
    font-size: 3.2rem;
    line-height: 64px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    margin: 0 6px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: var(--primary);
    }
  }

  label {
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 12px;
  }
`;
