import * as React from "react";

import { FormContainer } from "./styles";

type MessageFormProps = {
  handleSubmit: () => void;
};

export const Form: React.FC<MessageFormProps> = ({ handleSubmit, children }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit && handleSubmit();
  };

  return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
};
