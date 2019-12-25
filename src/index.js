import * as React from "react";
import * as ReactDOM from "react-dom";

import { GenericTemplate } from "ui/templates";
import { GenericStyles } from "styles";

import { MainPage } from "pages";

const App = () => {
  return (
    <>
      <GenericStyles />
      <GenericTemplate>
        <MainPage />
      </GenericTemplate>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
