import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EncryptionKeyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="purpose" source="purpose" />
        <TextInput label="algorithm" source="algorithm" />
        <TextInput label="key" source="key" />
        <DateTimeInput label="rotatedAt" source="rotatedAt" />
        <TextInput label="status" source="status" />
        <TextInput label="encPurpose" source="encPurpose" />
        <TextInput label="encAlgorithm" source="encAlgorithm" />
        <TextInput label="encKey" source="encKey" />
        <DateTimeInput label="encCreatedAt" source="encCreatedAt" />
        <TextInput label="encStatus" source="encStatus" />
        <DateTimeInput label="encRotatedAt" source="encRotatedAt" />
      </SimpleForm>
    </Create>
  );
};
