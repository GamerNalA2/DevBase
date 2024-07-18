import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CollectionTitle } from "../collection/CollectionTitle";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <NumberInput step={1} label="version" source="version" />
        <TextInput label="createdBy" source="createdBy" />
        <ReferenceInput
          source="collection.id"
          reference="Collection"
          label="collection"
        >
          <SelectInput optionText={CollectionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
