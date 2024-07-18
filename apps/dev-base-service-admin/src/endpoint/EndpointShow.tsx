import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ENDPOINT_TITLE_FIELD } from "./EndpointTitle";

export const EndpointShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="path" source="path" />
        <TextField label="method" source="method" />
        <TextField label="description" source="description" />
        <BooleanField label="authentication" source="authentication" />
        <TextField label="rateLimit" source="rateLimit" />
        <ReferenceManyField
          reference="ApiDocumentation"
          target="endpointId"
          label="ApiDocumentations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="version" source="version" />
            <TextField label="updatedAtField" source="updatedAtField" />
            <TextField label="content" source="content" />
            <TextField label="createdAtField" source="createdAtField" />
            <ReferenceField
              label="endpoint"
              source="endpoint.id"
              reference="Endpoint"
            >
              <TextField source={ENDPOINT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
