import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ChangeLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="entityType" source="entityType" />
        <TextField label="changes" source="changes" />
        <TextField label="entity" source="entity" />
        <TextField label="changeType" source="changeType" />
        <TextField label="version" source="version" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="entityTypeField" source="entityTypeField" />
        <TextField label="versionField" source="versionField" />
        <TextField label="entityField" source="entityField" />
        <TextField label="changeTypeField" source="changeTypeField" />
        <TextField label="createdByField" source="createdByField" />
        <TextField label="createdAtField" source="createdAtField" />
        <TextField label="changesField" source="changesField" />
      </SimpleShowLayout>
    </Show>
  );
};
