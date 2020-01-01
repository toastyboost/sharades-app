import { createEffect, createStore } from "effector";

import * as API from "api";

export const receiveMsg = createEffect<API.MsgProps, void>();
export const sendMsg = createEffect<API.MsgProps, void>();

// sendMsg.use(API.sendMsg);

export const $chatHistory = createStore<[] | API.MsgProps[]>([]);

$chatHistory.on(receiveMsg, (history, msg) => [msg, ...history]);
