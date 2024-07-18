import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { RestorePointTitle } from "../restorePoint/RestorePointTitle";

export const BackupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
