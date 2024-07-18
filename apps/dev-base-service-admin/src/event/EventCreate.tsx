import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <div />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="originatorId" source="originatorId" />
        <TextInput label="originatorType" source="originatorType" />
      </SimpleForm>
    </Create>
  );
};
