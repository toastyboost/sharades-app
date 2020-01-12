import * as React from "react";
import { Store } from "effector";
import { useStore } from "effector-react";

import { FormContainer } from "./styles";

type MessageFormProps = {
  handleSubmit: () => void;
  store: {
    $isValid: Store<boolean>;
  };
};

export const Form: React.FC<MessageFormProps> = ({ handleSubmit, children, store }) => {
  const isValid = useStore(store.$isValid);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSubmit && handleSubmit();
  };

  return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
};
