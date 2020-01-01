import * as React from "react";
import { Effect } from "effector";
import { MsgProps } from "api";

import { FormContainer, Form, FormInput, FormSubmit } from "./styles";

type MessageFormProps = {
  handleSend: Effect<MsgProps, void>;
  name: string;
};

export const MessageForm: React.FC<MessageFormProps> = ({ handleSend, name }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg: string = e.currentTarget.message.value;
    const ts: number = new Date().getTime();

    handleSend({ name, ts, msg });
    e.currentTarget.message.value = "";
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
