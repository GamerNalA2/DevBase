import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { BackupTitle } from "../backup/BackupTitle";

export const RestorePointEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceInput source="backup.id" reference="Backup" label="backup">
          <SelectInput optionText={BackupTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="restoredBy" source="restoredBy" />
      </SimpleForm>
    </Edit>
  );
};
