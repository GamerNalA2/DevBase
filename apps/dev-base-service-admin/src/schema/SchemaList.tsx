import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COLLECTION_TITLE_FIELD } from "../collection/CollectionTitle";

export const SchemaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Schemata"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
