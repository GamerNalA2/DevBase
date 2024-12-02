import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DASHBOARD_TITLE_FIELD } from "../dashboard/DashboardTitle";

export const WidgetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Widgets"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
