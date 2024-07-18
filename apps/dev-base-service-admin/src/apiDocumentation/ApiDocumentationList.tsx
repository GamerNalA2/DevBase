import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ENDPOINT_TITLE_FIELD } from "../endpoint/EndpointTitle";

export const ApiDocumentationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApiDocumentations"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
