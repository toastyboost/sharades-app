import { createStore, createEffect } from "effector";
import * as API from "api";

export const getUsersOnline = createEffect<API.UsersProps[], void>();

export const $usersOnline = createStore<API.UsersProps[] | []>([]);

$usersOnline.on(getUsersOnline, (_, users) => users);
