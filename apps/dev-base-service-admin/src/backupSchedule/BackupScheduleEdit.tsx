import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BackupScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="nextBackup" source="nextBackup" />
        <div />
        <TextInput label="frequency" source="frequency" />
        <DateTimeInput label="lastBackup" source="lastBackup" />
        <TextInput label="retention" source="retention" />
      </SimpleForm>
    </Edit>
  );
};
