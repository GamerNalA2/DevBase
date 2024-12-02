import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CollectionTitle } from "../collection/CollectionTitle";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
