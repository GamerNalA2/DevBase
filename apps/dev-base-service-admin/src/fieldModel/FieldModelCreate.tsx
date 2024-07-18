import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SchemaTitle } from "../schema/SchemaTitle";

export const FieldModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
        <BooleanInput label="isRequired" source="isRequired" />
        <div />
        <div />
        <ReferenceInput source="schema.id" reference="Schema" label="schema">
          <SelectInput optionText={SchemaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
