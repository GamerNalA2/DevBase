import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DASHBOARD_TITLE_FIELD } from "./DashboardTitle";

export const DashboardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="layout" source="layout" />
        <BooleanField label="isPublic" source="isPublic" />
        <TextField label="owner" source="owner" />
        <ReferenceManyField
          reference="Widget"
          target="dashboardId"
          label="Widgets"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
