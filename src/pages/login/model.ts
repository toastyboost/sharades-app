import { createEvent, guard, sample } from "effector";

import { createField, createForm } from "lib/form-factories";
import { validateEmoji } from "lib/validators";

import { signIn } from "features/user";

const randomEmoji = require("random-emoji");

export const submitForm = createEvent<React.FormEvent<HTMLFormElement>>();

const emoji = randomEmoji.random({ count: 1 });

export const nameField = createField({
  name: "name",
  initialValue: emoji[0].character,
  validator: validateEmoji,
});

export const loginForm = createForm({
  name: "loginForm",
  fields: [nameField],
});

guard({
  source: sample(nameField.$value, submitForm),
  filter: loginForm.$isValid,
  target: signIn,
});
