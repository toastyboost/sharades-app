import * as React from "react";
import styled from "styled-components";

import { Store, Event } from "effector";
import { useStore } from "effector-react";

export type FieldParams = {
  className?: string;
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
    isDisabled?: boolean;
  };
};

export const Field: React.FC<FieldParams> = ({ store, config, className }) => {
  const { label, name, placeholder, autofocus, isDisabled = false } = config;
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
    <div className={className}>
      {label && <label>{label}</label>}
      <input {...inputOptions} disabled={isDisabled} autoComplete="off" />
      {/* {isError && <Error>{error}</Error>} */}
    </div>
  );
};

export const Error = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1;
  margin-top: 12px;
`;
