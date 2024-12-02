import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MetadataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MetadataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dataType" source="dataType" />
        <TextField label="entityType" source="entityType" />
        <TextField label="entityField" source="entityField" />
        <TextField label="key" source="key" />
        <TextField label="value" source="value" />
      </Datagrid>
    </List>
  );
};
