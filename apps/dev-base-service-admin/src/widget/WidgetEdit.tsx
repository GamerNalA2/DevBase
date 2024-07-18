import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DashboardTitle } from "../dashboard/DashboardTitle";

export const WidgetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
