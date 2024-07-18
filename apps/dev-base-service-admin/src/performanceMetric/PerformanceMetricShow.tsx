import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PerformanceMetricShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="metricName" source="metricName" />
        <TextField label="value" source="value" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="context" source="context" />
      </SimpleShowLayout>
    </Show>
  );
};
