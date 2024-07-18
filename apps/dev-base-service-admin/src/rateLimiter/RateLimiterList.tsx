import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RateLimiterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RateLimiters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="resourceType" source="resourceType" />
        <TextField label="resource" source="resource" />
        <TextField label="limit" source="limit" />
        <TextField label="window" source="window" />
        <TextField label="current" source="current" />
        <TextField label="lastReset" source="lastReset" />
      </Datagrid>
    </List>
  );
};
