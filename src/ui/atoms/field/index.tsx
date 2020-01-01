import * as React from "react";

import { Store, Event } from "effector";
import { useStore } from "effector-react";

export type FieldParams = {
  store: {
    name: string;
    $value: Store<string>;
    $error: Store<string | null>;
    changed: Event<React.SyntheticEvent<HTMLInputElement>>;
  };
  config: {
    label?: string;
    name: string;
    placeholder?: string;
    autofocus?: boolean;
  };
};

export const Field = ({ store, config }: FieldParams) => {
  const { label, name, placeholder, autofocus } = config;
  const { $value, $error, changed } = store;

  const value = useStore($value);
  const error = useStore($error);

  const isError = !!error;

  const inputOptions = {
    autoFocus: autofocus,
    value,
    type: name,
    name,
    placeholder,
    onChange: changed,
  };

  return (
    <div style={{ display: "none" }}>
      {label && <div>{label}</div>}
      <input {...inputOptions} />
      {isError && <div>{error}</div>}
    </div>
  );
};
