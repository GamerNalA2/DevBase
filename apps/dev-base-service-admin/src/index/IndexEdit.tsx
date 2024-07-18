import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CollectionTitle } from "../collection/CollectionTitle";

export const IndexEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <div />
        <BooleanInput label="isUnique" source="isUnique" />
        <ReferenceInput
          source="collection.id"
          reference="Collection"
          label="collection"
        >
          <SelectInput optionText={CollectionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
