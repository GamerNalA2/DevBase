import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BackupScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BackupSchedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="nextBackup" source="nextBackup" />
        <TextField label="config" source="configField" />
        <TextField label="frequency" source="frequency" />
        <TextField label="lastBackup" source="lastBackup" />
        <TextField label="retention" source="retention" />
      </Datagrid>
    </List>
  );
};
