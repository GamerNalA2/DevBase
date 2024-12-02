import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="type" source="typeField" />
        <TextField label="data" source="data" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="originatorId" source="originatorId" />
        <TextField label="originatorType" source="originatorType" />
      </SimpleShowLayout>
    </Show>
  );
};
