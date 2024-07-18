import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { BACKUP_TITLE_FIELD } from "../backup/BackupTitle";

export const RestorePointShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
