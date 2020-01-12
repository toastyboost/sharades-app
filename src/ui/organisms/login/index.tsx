import * as React from "react";

import { LoginContainer, LoginSubmit } from "./styles";

type LoginProps = {
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
  isError?: boolean;
  isLoading: boolean;
};

export const Login: React.FC<LoginProps> = ({
  children,
  isError = false,
  handleSubmit,
  isLoading = false,
}) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit && handleSubmit(e);
  };

  return (
    <LoginContainer onSubmit={onSubmit} aria-disabled={isLoading}>
      {children}
      <LoginSubmit type="submit" name="submit" data-disabled={isError}>
        Войти
      </LoginSubmit>
    </LoginContainer>
  );
};
