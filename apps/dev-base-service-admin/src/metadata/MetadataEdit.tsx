import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MetadataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="dataType" source="dataType" />
        <TextInput label="entityType" source="entityType" />
        <TextInput label="entityField" source="entityField" />
        <TextInput label="key" source="key" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
