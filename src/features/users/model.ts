import { createStore, createEvent } from "effector";
import * as API from "api/socket";

export const setUsersOnline = createEvent<API.UsersProps[]>();

export const $usersOnline = createStore<API.UsersProps[] | []>([]);

$usersOnline.on(setUsersOnline, (_, usersList) => usersList);
