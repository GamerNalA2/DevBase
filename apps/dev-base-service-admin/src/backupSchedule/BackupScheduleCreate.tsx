import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BackupScheduleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="nextBackup" source="nextBackup" />
        <div />
        <TextInput label="frequency" source="frequency" />
        <DateTimeInput label="lastBackup" source="lastBackup" />
        <TextInput label="retention" source="retention" />
      </SimpleForm>
    </Create>
  );
};
