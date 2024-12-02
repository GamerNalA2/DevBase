import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SchemaTitle } from "../schema/SchemaTitle";

export const FieldModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
