import io from "socket.io-client";
import { createEffect } from "effector";
import { receiveMsg, setChatHistory } from "features/messages";
import { setUsersOnline } from "features/users";
import { paintImage } from "features/draw";

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

export type DrawningProps = {
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

socket.on("USER_MESSAGE", (msg: MsgProps) => {
  receiveMsg(msg);
});

//
socket.on("USERS_ONLINE", (users: UsersProps[]) => setUsersOnline(users));
socket.on("USER_DRAWNING", (coordiantes: DrawningProps) => paintImage(coordiantes));

socket.on("CHAT_HISTORY", (chatHistory: MsgProps[]) => {
  console.log("object", chatHistory);
  setChatHistory(chatHistory);
});

export const userDraw = (coordiantes: DrawningProps) => {
  socket.emit("USER_DRAWNING", coordiantes);
};
