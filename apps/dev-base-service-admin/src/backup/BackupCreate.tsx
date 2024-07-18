import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { RestorePointTitle } from "../restorePoint/RestorePointTitle";

export const BackupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="restorePoints"
          reference="RestorePoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestorePointTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
