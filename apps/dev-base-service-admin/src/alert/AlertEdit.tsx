import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AlertEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <div />
        <div />
        <TextInput label="status" source="status" />
        <DateTimeInput label="lastTriggered" source="lastTriggered" />
      </SimpleForm>
    </Edit>
  );
};
