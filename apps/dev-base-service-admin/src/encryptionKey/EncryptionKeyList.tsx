import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EncryptionKeyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EncryptionKeys"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="purpose" source="purpose" />
        <TextField label="algorithm" source="algorithm" />
        <TextField label="key" source="key" />
        <TextField label="rotatedAt" source="rotatedAt" />
        <TextField label="status" source="status" />
        <TextField label="encPurpose" source="encPurpose" />
        <TextField label="encAlgorithm" source="encAlgorithm" />
        <TextField label="encKey" source="encKey" />
        <TextField label="encCreatedAt" source="encCreatedAt" />
        <TextField label="encStatus" source="encStatus" />
        <TextField label="encRotatedAt" source="encRotatedAt" />
      </Datagrid>
    </List>
  );
};
