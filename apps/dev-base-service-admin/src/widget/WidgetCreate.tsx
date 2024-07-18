import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DashboardTitle } from "../dashboard/DashboardTitle";

export const WidgetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="typeField" source="typeField" />
        <div />
        <div />
        <ReferenceInput
          source="dashboard.id"
          reference="Dashboard"
          label="dashboard"
        >
          <SelectInput optionText={DashboardTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
