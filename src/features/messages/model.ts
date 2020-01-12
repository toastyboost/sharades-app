import { createEvent, createStore } from "effector";

import * as API from "api/socket";

export const receiveMsg = createEvent<API.MsgProps>();
export const sendMsg = createEvent<API.MsgProps>();
export const setChatHistory = createEvent<API.MsgProps[]>();

export const $chatHistory = createStore<[] | API.MsgProps[]>([]);

$chatHistory.on(setChatHistory, (_, serverHistory) => {
  console.log("serverHistory", serverHistory);
  return serverHistory;
});

$chatHistory.on(receiveMsg, (history, msg) => {
  console.log("receiveMsg", msg);

  return [msg, ...history];
});
