import * as React from "react";
import { useStore } from "effector-react";

import { Form } from "ui/atoms";
import { Chat, Drawer, OnlineUsers } from "ui/organisms";

import {
  MainContainer,
  Main,
  Aside,
  RightPanel,
  MessageField,
  UserAvatar,
  FormSubmit,
  RoundTimer,
} from "./styles";

import { $chatHistory } from "features/messages";
import { $session } from "features/user";
import { $usersOnline, $usersTyping } from "features/users";
import { $roundTimer } from "features/game";

import { submitMessage, msgField, $ticksLeft, $isFormValid } from "./model";

export const MainPage = () => {
  const history = useStore($chatHistory);
  const session = useStore($session);
  const users = useStore($usersOnline);
  const typing = useStore($usersTyping);
  const ticksLeft = useStore($ticksLeft);
  const isFormValid = useStore($isFormValid);
  const roundTimer = useStore($roundTimer);

  const handleSubmit = () => {
    submitMessage();
  };

  return (
    <MainContainer>
      <Main>
        <RoundTimer time={roundTimer} />
        <Drawer />
      </Main>
      <Aside>
        <Chat history={history}>
          <Form handleSubmit={handleSubmit}>
            <UserAvatar>{session.name}</UserAvatar>
            <MessageField
              store={msgField}
              config={{
                name: "message",
                placeholder: "Сообщение...",
                autofocus: true,
              }}
            />
            <FormSubmit
              type="submit"
              value={ticksLeft <= 0 ? "Send" : `00: 0${ticksLeft}`}
              aria-disabled={!isFormValid}
            />
          </Form>
        </Chat>
      </Aside>
      <RightPanel>
        <OnlineUsers users={users} typing={typing} host="😱" />
      </RightPanel>
    </MainContainer>
  );
};
