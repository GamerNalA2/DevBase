import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const RateLimiterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="resourceType" source="resourceType" />
        <TextInput label="resource" source="resource" />
        <NumberInput step={1} label="limit" source="limit" />
        <NumberInput step={1} label="window" source="window" />
        <NumberInput step={1} label="current" source="current" />
        <DateTimeInput label="lastReset" source="lastReset" />
      </SimpleForm>
    </Create>
  );
};
