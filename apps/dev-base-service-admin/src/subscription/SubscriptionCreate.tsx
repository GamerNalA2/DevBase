import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { CollectionTitle } from "../collection/CollectionTitle";
import { QueryTitle } from "../query/QueryTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="event" source="event" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="collection.id"
          reference="Collection"
          label="collection"
        >
          <SelectInput optionText={CollectionTitle} />
        </ReferenceInput>
        <ReferenceInput source="query.id" reference="Query" label="query">
          <SelectInput optionText={QueryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
