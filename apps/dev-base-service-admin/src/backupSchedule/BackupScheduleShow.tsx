import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BackupScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="nextBackup" source="nextBackup" />
        <TextField label="config" source="configField" />
        <TextField label="frequency" source="frequency" />
        <TextField label="lastBackup" source="lastBackup" />
        <TextField label="retention" source="retention" />
      </SimpleShowLayout>
    </Show>
  );
};
