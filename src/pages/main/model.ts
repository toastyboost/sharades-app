import { createEvent, createStore, guard, sample, combine, forward } from "effector";

import { sendMsg } from "api/socket";
import { $session } from "features/user";

import { createField, createForm } from "lib/form-factories";

import { createCountdown } from "lib/create-countdown";
import { validateMessage } from "lib/validators";

export const submitMessage = createEvent<void>();
const resetMessage = createEvent<void>();

export const $ticksLeft = createStore<number>(0);
const $isCountdownEnd = createStore<boolean>(true);

export const msgField = createField({
  name: "message",
  handleReset: resetMessage,
  validator: validateMessage,
});

export const loginForm = createForm({
  name: "messageForm",
  fields: [msgField],
});

export const disableForm = createEvent<void | number>();

const formStatus = createCountdown("formSubmit", {
  start: disableForm,
});

$ticksLeft.on(formStatus.tick, (_, seconds) => seconds);
$isCountdownEnd.on(formStatus.tick, (_, seconds) => seconds <= 0);

const $msg = combine(msgField.$value, $session, (message, user) => ({
  name: user.name,
  ts: new Date().getTime(),
  msg: message,
}));

export const $isFormValid = combine(
  loginForm.$isValid,
  $isCountdownEnd,
  (isValid, isEnd) => isValid && isEnd
);

guard({
  source: sample($msg, submitMessage),
  filter: $isFormValid,
  target: sendMsg,
});

forward({ from: sendMsg, to: resetMessage });
forward({ from: sendMsg, to: disableForm.prepend(() => 5) });
