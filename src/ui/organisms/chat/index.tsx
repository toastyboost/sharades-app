import * as React from "react";
import { Effect } from "effector";

import { MsgProps } from "api";

import {
  //
  ChatContainer,
  MessagesContainer,
  Message,
  MessageHeader,
  MessageContent,
} from "./styles";

import { MessageForm } from "ui/molecules";

const MessageItem: React.FC<MsgProps> = ({ name, ts, msg }) => {
  return (
    <Message>
      <MessageHeader>{name}</MessageHeader>
      <MessageContent>{msg}</MessageContent>
    </Message>
  );
};

type ChatProps = {
  history: MsgProps[];
  username: string;
  handleSend: Effect<MsgProps, void>;
};

export const Chat: React.FC<ChatProps> = ({ history, username, handleSend }) => {
  return (
    <ChatContainer>
      <MessagesContainer>
        {history
          ? history.map((item, key) => <MessageItem key={key} {...item} />)
          : "Нет сообщений"}
      </MessagesContainer>
      <MessageForm handleSend={handleSend} name={username} />
    </ChatContainer>
  );
};
