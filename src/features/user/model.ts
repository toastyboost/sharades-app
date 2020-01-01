import { createStore, createEffect } from "effector";
import * as API from "api";

type UserSession = {
  name: string | null;
};

export const registerUser = createEffect<API.RegUsersProps, void>();

registerUser.use(API.registerUser);

export const $session = createStore<UserSession>({
  name: null,
});

$session.on(registerUser, (_, user) => user);
