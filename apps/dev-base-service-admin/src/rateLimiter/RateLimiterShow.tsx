import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RateLimiterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="resourceType" source="resourceType" />
        <TextField label="resource" source="resource" />
        <TextField label="limit" source="limit" />
        <TextField label="window" source="window" />
        <TextField label="current" source="current" />
        <TextField label="lastReset" source="lastReset" />
      </SimpleShowLayout>
    </Show>
  );
};
