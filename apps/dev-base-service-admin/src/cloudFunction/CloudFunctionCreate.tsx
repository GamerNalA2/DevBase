import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CloudFunctionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="runtime" source="runtime" />
        <TextInput label="trigger" source="trigger" />
        <DateTimeInput label="lastExecuted" source="lastExecuted" />
        <div />
        <NumberInput step={1} label="timeout" source="timeout" />
        <NumberInput step={1} label="memorySize" source="memorySize" />
        <TextInput label="code" source="code" />
        <NumberInput step={1} label="version" source="version" />
      </SimpleForm>
    </Create>
  );
};
