import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RoleTitle } from "../role/RoleTitle";

export const AccessControlEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="resourceType" source="resourceType" />
        <div />
        <TextInput label="resource" source="resource" />
        <ReferenceInput source="role.id" reference="Role" label="role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <TextInput label="resourceTypeField" source="resourceTypeField" />
        <div />
        <TextInput label="resourceField" source="resourceField" />
        <TextInput label="roleField" source="roleField" />
      </SimpleForm>
    </Edit>
  );
};
