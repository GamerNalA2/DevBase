import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WidgetTitle } from "../widget/WidgetTitle";

export const DashboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
