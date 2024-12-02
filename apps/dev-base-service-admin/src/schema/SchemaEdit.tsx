import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CollectionTitle } from "../collection/CollectionTitle";
import { FieldModelTitle } from "../fieldModel/FieldModelTitle";

export const SchemaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="version" source="version" />
        <div />
        <ReferenceInput
          source="collection.id"
          reference="Collection"
          label="collection"
        >
          <SelectInput optionText={CollectionTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="fields"
          reference="FieldModel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FieldModelTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
