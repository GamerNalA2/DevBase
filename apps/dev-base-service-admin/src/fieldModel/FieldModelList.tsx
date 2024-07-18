import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { SCHEMA_TITLE_FIELD } from "../schema/SchemaTitle";

export const FieldModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Fields"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="schema" source="schema.id" reference="Schema">
          <TextField source={SCHEMA_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
