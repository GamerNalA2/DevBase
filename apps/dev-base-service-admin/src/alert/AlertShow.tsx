import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AlertShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="condition" source="condition" />
        <TextField label="action" source="action" />
        <TextField label="status" source="status" />
        <TextField label="lastTriggered" source="lastTriggered" />
      </SimpleShowLayout>
    </Show>
  );
};
