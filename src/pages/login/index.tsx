import * as React from "react";

import { Overlay } from "ui/atoms";
import { Login } from "ui/organisms";

import { nameField, submitForm } from "./model";
import { LoginPageContainer, LoginField } from "./styles";

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Overlay aria-hidden="true">
        <Login handleSubmit={submitForm} isLoading={false}>
          <LoginField
            store={nameField}
            config={{
              label: "Имя:",
              name: "name",
            }}
          />
        </Login>
      </Overlay>
    </LoginPageContainer>
  );
};
