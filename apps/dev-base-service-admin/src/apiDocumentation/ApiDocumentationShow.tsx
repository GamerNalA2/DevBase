import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ENDPOINT_TITLE_FIELD } from "../endpoint/EndpointTitle";

export const ApiDocumentationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
