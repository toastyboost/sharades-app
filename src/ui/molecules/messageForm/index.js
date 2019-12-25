import * as React from "react";

import { FormContainer, Form, FormInput, FormSubmit } from "./styles";

export const MessageForm = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const ts = new Date().getTime();
    const msg = e.target.message.value;

    // sendMessage("%name%", ts, msg);

    e.target.message.value = "";
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput type="text" name="message" placeholder="Cообщение..." autoComplete="off" />
        <FormSubmit type="submit" value="submit" />
      </Form>
    </FormContainer>
  );
};
