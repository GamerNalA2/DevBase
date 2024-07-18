import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QueryTitle } from "../query/QueryTitle";

export const QueryCacheEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="expiresAt" source="expiresAt" />
        <ReferenceInput source="query.id" reference="Query" label="query">
          <SelectInput optionText={QueryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
