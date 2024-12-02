import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CloudFunctionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="runtime" source="runtime" />
        <TextField label="trigger" source="trigger" />
        <TextField label="lastExecuted" source="lastExecuted" />
        <TextField label="environment" source="environment" />
        <TextField label="timeout" source="timeout" />
        <TextField label="memorySize" source="memorySize" />
        <TextField label="code" source="code" />
        <TextField label="version" source="version" />
      </SimpleShowLayout>
    </Show>
  );
};
