import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <div />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="originatorId" source="originatorId" />
        <TextInput label="originatorType" source="originatorType" />
      </SimpleForm>
    </Edit>
  );
};
