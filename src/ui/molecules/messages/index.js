import * as React from "react";
import Moment from "react-moment";

import {
  MessagesContainer,
  Message,
  MessageHeader,
  MessageName,
  MessageDate,
  MessageContent,
} from "./styles";

const MessageItem = ({ name, ts, msg }) => {
  return (
    <Message>
      <MessageHeader>
        <MessageName>{name}</MessageName>
        <MessageDate>
          <Moment date={ts} format="HH:MM" />
        </MessageDate>
      </MessageHeader>
      <MessageContent>{msg}</MessageContent>
    </Message>
  );
};

export const Messages = ({ data }) => {
  return (
    <MessagesContainer>
      {data ? data.map((item, key) => <MessageItem key={key} {...item} />) : "Нет сообщений"}
    </MessagesContainer>
  );
};
