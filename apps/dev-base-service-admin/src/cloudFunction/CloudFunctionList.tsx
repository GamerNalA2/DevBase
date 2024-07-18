import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CloudFunctionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CloudFunctions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="runtime" source="runtime" />
        <TextField label="trigger" source="trigger" />
        <TextField label="lastExecuted" source="lastExecuted" />
        <TextField label="environment" source="environment" />
        <TextField label="timeout" source="timeout" />
        <TextField label="memorySize" source="memorySize" />
        <TextField label="code" source="code" />
        <TextField label="version" source="version" />
      </Datagrid>
    </List>
  );
};
