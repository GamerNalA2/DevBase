import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const MigrationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="appliedAt" source="appliedAt" />
        <NumberInput step={1} label="version" source="version" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
