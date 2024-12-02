import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { QueryTitle } from "../query/QueryTitle";

export const QueryCacheCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="expiresAt" source="expiresAt" />
        <ReferenceInput source="query.id" reference="Query" label="query">
          <SelectInput optionText={QueryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
