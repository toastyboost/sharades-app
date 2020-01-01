import * as React from "react";
import { Effect } from "effector";

import { FieldParams } from "ui/atoms/field";

import * as API from "api";
import { LoginContainer, PreserveNames, Name, LoginSubmit } from "./styles";

type LoginProps = {
  handleSubmit?: Effect<API.RegUsersProps, void>;
  isError?: boolean;
  fields?: {
    [key: string]: FieldParams;
  };
};

const names = ["🐥", "🦆", "🧜‍♀️", "🧙‍♀️"];

export const Login = ({ fields = {}, isError, handleSubmit }: LoginProps) => {
  const [activeName, setActiveName] = React.useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (handleSubmit) {
      handleSubmit({
        name: activeName,
      });
    }
  };

  return (
    <LoginContainer onSubmit={onSubmit}>
      <PreserveNames>
        {names.map((name, key) => (
          <Name key={key} onClick={() => setActiveName(name)} data-active={activeName === name}>
            {name}
          </Name>
        ))}
      </PreserveNames>
      <LoginSubmit type="submit" name="submit" data-disabled={isError}>
        Войти
      </LoginSubmit>
    </LoginContainer>
  );
};
