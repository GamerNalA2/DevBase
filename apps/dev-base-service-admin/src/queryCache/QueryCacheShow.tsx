import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { QUERY_TITLE_FIELD } from "../query/QueryTitle";

export const QueryCacheShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="result" source="result" />
        <TextField label="expiresAt" source="expiresAt" />
        <ReferenceField label="query" source="query.id" reference="Query">
          <TextField source={QUERY_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
