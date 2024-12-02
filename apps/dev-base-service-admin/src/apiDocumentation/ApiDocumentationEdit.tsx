import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EndpointTitle } from "../endpoint/EndpointTitle";

export const ApiDocumentationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
