import { createStore, createEvent } from "effector";
import * as API from "api/socket";
import { debounce } from "lib/debounce";

export const setUsersOnline = createEvent<API.UsersProps[]>();
export const receiveTyping = createEvent<string>();
export const stopTyping = createEvent<string>();

export const $usersOnline = createStore<API.UsersProps[]>([]);
export const $usersTyping = createStore<string[]>([]);

$usersOnline.on(setUsersOnline, (_, usersList) => usersList);

$usersTyping.on(receiveTyping, (usersList, typer) => {
  if (!usersList.includes(typer)) {
    return [...usersList, typer];
  }
});

receiveTyping.watch(debounce(stopTyping, 1000));

$usersTyping.on(stopTyping, (usersList, typer) => usersList.filter(user => user !== typer));
