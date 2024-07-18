import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AlertCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <div />
        <div />
        <TextInput label="status" source="status" />
        <DateTimeInput label="lastTriggered" source="lastTriggered" />
      </SimpleForm>
    </Create>
  );
};
