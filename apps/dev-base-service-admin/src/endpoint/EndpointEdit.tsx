import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ApiDocumentationTitle } from "../apiDocumentation/ApiDocumentationTitle";

export const EndpointEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="path" source="path" />
        <TextInput label="method" source="method" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="authentication" source="authentication" />
        <NumberInput step={1} label="rateLimit" source="rateLimit" />
        <ReferenceArrayInput
          source="apiDocumentations"
          reference="ApiDocumentation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiDocumentationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
