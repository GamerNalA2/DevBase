import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ApiDocumentationTitle } from "../apiDocumentation/ApiDocumentationTitle";

export const EndpointCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
