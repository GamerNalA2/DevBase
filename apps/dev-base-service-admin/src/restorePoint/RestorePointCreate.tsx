import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { BackupTitle } from "../backup/BackupTitle";

export const RestorePointCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceInput source="backup.id" reference="Backup" label="backup">
          <SelectInput optionText={BackupTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="restoredBy" source="restoredBy" />
      </SimpleForm>
    </Create>
  );
};
