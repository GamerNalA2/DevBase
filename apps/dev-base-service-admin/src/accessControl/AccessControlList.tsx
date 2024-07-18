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
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";

export const AccessControlList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AccessControls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="resourceType" source="resourceType" />
        <TextField label="permissions" source="permissions" />
        <TextField label="resource" source="resource" />
        <ReferenceField label="role" source="role.id" reference="Role">
          <TextField source={ROLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="resourceTypeField" source="resourceTypeField" />
        <TextField label="permissionsField" source="permissionsField" />
        <TextField label="resourceField" source="resourceField" />
        <TextField label="roleField" source="roleField" />
      </Datagrid>
    </List>
  );
};
