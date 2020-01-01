import { createStore, createEvent, Store, Event } from "effector";

type CreateFieldProps = {
  name: string;
  initialValue?: string;
  length?: number;
  validator: (value: string) => string | null;
};

export type CreateFieldResult = {
  name: string;
  $value: Store<string>;
  $error: Store<string | null>;
  changed: Event<React.SyntheticEvent<HTMLInputElement>>;
};

export const createField = ({
  name,
  length,
  initialValue = "",
  validator,
}: CreateFieldProps): CreateFieldResult => {
  const changed = createEvent<React.SyntheticEvent<HTMLInputElement>>(`${name}Changed`);

  const $value = createStore(initialValue, { name: `${name}Store` });
  const $error = $value.map(validator);

  $value.on(changed, (_, payload) => payload.currentTarget.value.substring(0, length));

  return { name, $value, $error, changed };
};
