import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WidgetTitle } from "../widget/WidgetTitle";

export const DashboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <div />
        <BooleanInput label="isPublic" source="isPublic" />
        <TextInput label="owner" source="owner" />
        <ReferenceArrayInput
          source="widgets"
          reference="Widget"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WidgetTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
