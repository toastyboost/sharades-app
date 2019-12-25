import * as React from "react";

import { ChatContainer } from "./styles";

import { Messages, MessageForm } from "ui/molecules";

export const Chat = ({ messages }) => {
  return (
    <ChatContainer>
      <Messages data={messages} />
      <MessageForm />
    </ChatContainer>
  );
};
