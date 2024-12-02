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
import { QUERY_TITLE_FIELD } from "../query/QueryTitle";

export const QueryCacheList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QueryCaches"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="result" source="result" />
        <TextField label="expiresAt" source="expiresAt" />
        <ReferenceField label="query" source="query.id" reference="Query">
          <TextField source={QUERY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
