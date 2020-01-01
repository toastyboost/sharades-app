import * as React from "react";
import { useStore } from "effector-react";

import { Chat, Drawer, OnlineUsers } from "ui/organisms";

import { MainContainer, Main, Aside, RightPanel } from "./styles";

import { $chatHistory, sendMsg } from "features/messages";
import { $session } from "features/user";
import { $usersOnline } from "features/users";

export const MainPage = () => {
  const history = useStore($chatHistory);
  const session = useStore($session);
  const users = useStore($usersOnline);

  return (
    <MainContainer>
      <Main>
        <Drawer />
      </Main>
      <Aside>
        <Chat history={history} username={session.name || "anonymous"} handleSend={sendMsg} />
      </Aside>
      <RightPanel>
        <OnlineUsers users={users} />
      </RightPanel>
    </MainContainer>
  );
};
