import io from "socket.io-client";

import { receiveMsg } from "features/messages";
import { getUsersOnline } from "features/users";
import { paintImage } from "features/draw";

export const socket = io("http://localhost:8000");

export type UsersProps = {
  name: string;
};

export type RegUsersProps = {
  name: string;
};

export type MsgProps = {
  name: string;
  msg: string;
  ts: number;
};

export type DrawningProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

socket.on("NEW_CHAT_MESSAGE", (msg: MsgProps) => receiveMsg(msg));
socket.on("USERS_ONLINE", (users: UsersProps[]) => getUsersOnline(users));
socket.on("USER_DRAWNING", (coordiantes: DrawningProps) => paintImage(coordiantes));

export const sendMsg = (msg: MsgProps) => {
  socket.emit("USER_MESSAGE", msg);
};

export const registerUser = (user: RegUsersProps) => {
  socket.emit("REGISTER_USER", user);
};

export const userDraw = (coordiantes: DrawningProps) => {
  socket.emit("USER_DRAWNING", coordiantes);
};
