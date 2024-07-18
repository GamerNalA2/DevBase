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
import { BACKUP_TITLE_FIELD } from "../backup/BackupTitle";

export const RestorePointList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RestorePoints"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="startTime" source="startTime" />
        <ReferenceField label="backup" source="backup.id" reference="Backup">
          <TextField source={BACKUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <TextField label="endTime" source="endTime" />
        <TextField label="restoredBy" source="restoredBy" />
      </Datagrid>
    </List>
  );
};
