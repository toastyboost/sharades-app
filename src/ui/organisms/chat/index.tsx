import * as React from "react";

import { MsgProps } from "api/socket";

import {
  //
  ChatContainer,
  MessagesContainer,
  Message,
  MessageHeader,
  MessageContent,
  NoMessagesContainer,
} from "./styles";

const MessageItem: React.FC<MsgProps> = ({ name, ts, msg }) => {
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Message aria-hidden={isVisible}>
      <MessageHeader>{name}</MessageHeader>
      <MessageContent>{msg}</MessageContent>
    </Message>
  );
};

const NoMessages = () => {
  return (
    <NoMessagesContainer>
      <span role="img" aria-label="No messages">
        🙂
      </span>
      В чате пока нет сообщений, будте первым!
    </NoMessagesContainer>
  );
};

type ChatProps = {
  history: MsgProps[];
};

export const Chat: React.FC<ChatProps> = ({ history, children }) => {
  return (
    <ChatContainer>
      <MessagesContainer>
        {history.length > 0 ? (
          history.map((item, key) => <MessageItem key={key} {...item} />)
        ) : (
          <NoMessages />
        )}
      </MessagesContainer>
      {children}
    </ChatContainer>
  );
};
