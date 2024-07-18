import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EndpointTitle } from "../endpoint/EndpointTitle";

export const ApiDocumentationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="version" source="version" />
        <DateTimeInput label="updatedAtField" source="updatedAtField" />
        <div />
        <DateTimeInput label="createdAtField" source="createdAtField" />
        <ReferenceInput
          source="endpoint.id"
          reference="Endpoint"
          label="endpoint"
        >
          <SelectInput optionText={EndpointTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
