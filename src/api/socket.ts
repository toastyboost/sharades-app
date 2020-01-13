import * as io from "socket.io-client";
import { createEffect } from "effector";

import { receiveMsg, setChatHistory } from "features/messages";
import { setUsersOnline, receiveTyping } from "features/users";
import { drawImage } from "features/draw";
import { setCountdown } from "features/game";

import { server } from "./";

export const socket = io(server);

export type UsersProps = {
  name: string;
  id: string;
};

export type MsgProps = {
  name: string | null;
  ts: number;
  msg: string;
};

export type CoodrinateProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type Credentials = {
  name: string | null;
};

export const signIn = (credentials: Credentials) => {
  socket.emit("INIT_SESSION", credentials);
};

export const sendMsg = createEffect<MsgProps, void>({
  handler(message) {
    socket.emit("USER_MESSAGE", message);
  },
});

export const sendTyping = createEffect<void, void>({
  handler() {
    socket.emit("USER_TYPING");
  },
});

export const sendDrawning = createEffect<CoodrinateProps, void>({
  handler(coordiantes) {
    socket.emit("USER_DRAWNING", coordiantes);
  },
});

//

socket.on("USER_MESSAGE", (msg: MsgProps) => {
  receiveMsg(msg);
});

socket.on("USER_TYPING", (user: string) => {
  receiveTyping(user);
});

socket.on("USER_DRAWNING", (coordiantes: CoodrinateProps) => drawImage(coordiantes));
socket.on("ROUND_COUNTDOWN", (time: number) => setCountdown(time));

//
socket.on("USERS_ONLINE", (users: UsersProps[]) => setUsersOnline(users));

socket.on("CHAT_HISTORY", (chatHistory: MsgProps[]) => {
  setChatHistory(chatHistory);
});
