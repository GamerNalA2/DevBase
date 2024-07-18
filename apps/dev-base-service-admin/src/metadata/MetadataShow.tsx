import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MetadataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dataType" source="dataType" />
        <TextField label="entityType" source="entityType" />
        <TextField label="entityField" source="entityField" />
        <TextField label="key" source="key" />
        <TextField label="value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
