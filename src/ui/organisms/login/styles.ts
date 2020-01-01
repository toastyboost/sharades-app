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

export const PreserveNames = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Name = styled.div`
  text-align: center;
  width: 52px;
  height: 52px;
  font-size: 3.6rem;
  line-height: 52px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  margin: 0 6px;
  transition: 0.3s;
  cursor: pointer;

  &[data-active="true"] {
    background-color: var(--primary);
  }

  &:hover {
    background-color: var(--primary);
  }
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
