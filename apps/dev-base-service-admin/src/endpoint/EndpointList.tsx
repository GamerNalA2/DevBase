import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const EndpointList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Endpoints"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="path" source="path" />
        <TextField label="method" source="method" />
        <TextField label="description" source="description" />
        <BooleanField label="authentication" source="authentication" />
        <TextField label="rateLimit" source="rateLimit" />
      </Datagrid>
    </List>
  );
};
