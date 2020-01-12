import { createStore, createEvent, combine, Store, Event } from "effector";

type CreateFieldProps = {
  name: string;
  initialValue?: string;
  length?: number;
  validator?: (value: string) => string | null;
  handleReset?: Event<any>;
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
  handleReset,
}: CreateFieldProps): CreateFieldResult => {
  const changed = createEvent<React.SyntheticEvent<HTMLInputElement>>(`${name}Changed`);

  const $value = createStore(initialValue, { name: `${name}Store` });

  const $error = validator ? $value.map(validator) : createStore<null | string>(null);

  $value.on(changed, (_, payload) => payload.currentTarget.value.substring(0, length));

  if (handleReset) {
    $value.on(handleReset, () => "");
  }

  return { name, $value, $error, changed };
};

type CreateFormProps = {
  name: string;
  fields: Array<CreateFieldResult>;
  validator?: Store<boolean>;
};

type CreateFormResults = {
  $values: Store<{ [key: string]: string }>;
  $isValid: Store<boolean>;
  name: string;
};

export const createForm = ({ name, fields, validator }: CreateFormProps): CreateFormResults => {
  const $isValid = validator || validateFields(fields);

  const $values = combine(
    fields.reduce((acc, { $value, name }) => ({ ...acc, ...{ [name]: $value } }), {})
  );

  return { name, $values, $isValid };
};

export const validateFields = (fields: CreateFieldResult[]) => {
  const allStores = fields.map(({ $error }) => $error);
  return combine(allStores, all => all.every((value: string | null) => !value));
};
