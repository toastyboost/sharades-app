// import { createStore } from "effector";
import { createField } from "lib/form-factories";
import { validateEmoji } from "lib/validators";

export const nameField = createField({
  name: "code",
  length: 4,
  validator: validateEmoji,
});
