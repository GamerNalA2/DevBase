import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AlertList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Alerts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="condition" source="condition" />
        <TextField label="action" source="action" />
        <TextField label="status" source="status" />
        <TextField label="lastTriggered" source="lastTriggered" />
      </Datagrid>
    </List>
  );
};
