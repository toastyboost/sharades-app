import * as React from "react";
import * as ReactDOM from "react-dom";

import { useStore } from "effector-react";

import { GenericTemplate } from "ui/templates";
import { GenericStyles } from "styles";

import { MainPage, LoginPage } from "pages";
import { $session } from "features/user";

const App = () => {
  const session = useStore($session);

  return (
    <>
      <GenericStyles />
      <GenericTemplate>{session.name ? <MainPage /> : <LoginPage />}</GenericTemplate>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
