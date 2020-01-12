import styled from "styled-components";

export const LoginContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--block-bg);
  border-radius: 6px;
  padding: 24px;
  max-width: 350px;
`;

export const LoginSubmit = styled.button`
  margin-top: 24px;
  font-size: 1.6rem;
  line-height: 3.6rem;
  background-color: var(--primary);
  color: #fff;
  padding: 0 24px;
  border-radius: 3px;

  &[data-disabled="true"] {
    opacity: 0.7;
  }
`;
