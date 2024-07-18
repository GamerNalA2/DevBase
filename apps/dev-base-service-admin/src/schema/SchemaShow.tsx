import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { SCHEMA_TITLE_FIELD } from "./SchemaTitle";
import { COLLECTION_TITLE_FIELD } from "../collection/CollectionTitle";

export const SchemaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="version" source="version" />
        <TextField label="definition" source="definition" />
        <ReferenceField
          label="collection"
          source="collection.id"
          reference="Collection"
        >
          <TextField source={COLLECTION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="FieldModel"
          target="schemaId"
          label="Fields"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="type" source="typeField" />
            <BooleanField label="isRequired" source="isRequired" />
            <TextField label="defaultValue" source="defaultValue" />
            <TextField label="constraints" source="constraints" />
            <ReferenceField
              label="schema"
              source="schema.id"
              reference="Schema"
            >
              <TextField source={SCHEMA_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
