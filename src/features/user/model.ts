import { createStore, createEffect } from "effector";
import * as API from "api/socket";

export const signIn = createEffect<string, void>();

signIn.use((name: string) => API.signIn({ name }));

export const $session = createStore<API.Credentials>({
  name: null,
});

$session.on(signIn, (_, name: string) => ({ name }));
