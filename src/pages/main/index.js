import * as React from "react";

import { Chat, Drawer, OnlineUsers } from "ui/organisms";

import { MainContainer, Main, Aside, RightPanel } from "./styles";
import { messagesList } from "./data";

export const MainPage = () => (
  <MainContainer>
    <Main>
      <Drawer />
    </Main>
    <Aside>
      <Chat messages={messagesList} />
    </Aside>
    <RightPanel>
      <OnlineUsers />
    </RightPanel>
  </MainContainer>
);
