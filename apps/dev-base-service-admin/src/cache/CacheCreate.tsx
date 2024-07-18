import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CacheCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <div />
        <NumberInput step={1} label="ttl" source="ttl" />
        <DateTimeInput label="lastAccessed" source="lastAccessed" />
      </SimpleForm>
    </Create>
  );
};
