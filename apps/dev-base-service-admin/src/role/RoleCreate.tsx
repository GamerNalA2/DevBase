import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { UserRoleTitle } from "../userRole/UserRoleTitle";
import { AccessControlTitle } from "../accessControl/AccessControlTitle";

export const RoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="userRoles"
          reference="UserRole"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserRoleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="accessControls"
          reference="AccessControl"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccessControlTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
