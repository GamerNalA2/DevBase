import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DASHBOARD_TITLE_FIELD } from "../dashboard/DashboardTitle";

export const WidgetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="typeField" source="typeField" />
        <TextField label="config" source="configField" />
        <TextField label="position" source="position" />
        <ReferenceField
          label="dashboard"
          source="dashboard.id"
          reference="Dashboard"
        >
          <TextField source={DASHBOARD_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
