import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MetadataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="dataType" source="dataType" />
        <TextInput label="entityType" source="entityType" />
        <TextInput label="entityField" source="entityField" />
        <TextInput label="key" source="key" />
        <div />
      </SimpleForm>
    </Create>
  );
};
