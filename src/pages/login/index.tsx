import * as React from "react";

import { Overlay } from "ui/atoms";
import { Login } from "ui/organisms";

import { registerUser } from "features/user";

import { nameField } from "./model";
import { LoginPageContainer } from "./styles";

const name = {
  store: nameField,
  config: {
    label: "Имя",
    name: "name",
    autofocus: true,
  },
};

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Overlay aria-hidden="true">
        <Login fields={{ name }} handleSubmit={registerUser} />
      </Overlay>
    </LoginPageContainer>
  );
};
