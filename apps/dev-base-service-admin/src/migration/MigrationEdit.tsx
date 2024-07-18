import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const MigrationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="appliedAt" source="appliedAt" />
        <NumberInput step={1} label="version" source="version" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
