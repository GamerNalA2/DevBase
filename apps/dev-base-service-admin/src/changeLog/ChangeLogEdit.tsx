import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ChangeLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="entityType" source="entityType" />
        <div />
        <TextInput label="entity" source="entity" />
        <TextInput label="changeType" source="changeType" />
        <NumberInput step={1} label="version" source="version" />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="entityTypeField" source="entityTypeField" />
        <NumberInput step={1} label="versionField" source="versionField" />
        <TextInput label="entityField" source="entityField" />
        <TextInput label="changeTypeField" source="changeTypeField" />
        <TextInput label="createdByField" source="createdByField" />
        <DateTimeInput label="createdAtField" source="createdAtField" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
