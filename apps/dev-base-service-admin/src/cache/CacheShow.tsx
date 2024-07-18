import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CacheShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="key" source="key" />
        <TextField label="value" source="value" />
        <TextField label="ttl" source="ttl" />
        <TextField label="lastAccessed" source="lastAccessed" />
      </SimpleShowLayout>
    </Show>
  );
};
