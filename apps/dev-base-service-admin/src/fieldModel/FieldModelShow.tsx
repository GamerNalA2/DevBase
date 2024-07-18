import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SCHEMA_TITLE_FIELD } from "../schema/SchemaTitle";

export const FieldModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="type" source="typeField" />
        <BooleanField label="isRequired" source="isRequired" />
        <TextField label="defaultValue" source="defaultValue" />
        <TextField label="constraints" source="constraints" />
        <ReferenceField label="schema" source="schema.id" reference="Schema">
          <TextField source={SCHEMA_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
