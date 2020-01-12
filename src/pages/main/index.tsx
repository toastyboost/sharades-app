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
} from "./styles";

import { $chatHistory } from "features/messages";
import { $session } from "features/user";
import { $usersOnline } from "features/users";

import { submitMessage, msgField, loginForm, $ticksLeft, $isFormValid } from "./model";

export const MainPage = () => {
  const history = useStore($chatHistory);
  const session = useStore($session);
  const users = useStore($usersOnline);
  const ticksLeft = useStore($ticksLeft);
  const isFormValid = useStore($isFormValid);

  const handleSubmit = () => {
    submitMessage();
  };

  return (
    <MainContainer>
      <Main>
        <Drawer />
      </Main>
      <Aside>
        <Chat history={history}>
          <Form handleSubmit={handleSubmit} store={loginForm}>
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
        <OnlineUsers users={users} />
      </RightPanel>
    </MainContainer>
  );
};
