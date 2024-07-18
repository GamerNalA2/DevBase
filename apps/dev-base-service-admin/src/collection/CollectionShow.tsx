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

import { COLLECTION_TITLE_FIELD } from "./CollectionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { QUERY_TITLE_FIELD } from "../query/QueryTitle";

export const CollectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="schema" source="schema" />
        <BooleanField label="isSchemaless" source="isSchemaless" />
        <TextField label="version" source="version" />
        <BooleanField label="isPublic" source="isPublic" />
        <TextField label="owner" source="owner" />
        <ReferenceManyField
          reference="Index"
          target="collectionId"
          label="Indices"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="fields" source="fields" />
            <BooleanField label="isUnique" source="isUnique" />
            <ReferenceField
              label="collection"
              source="collection.id"
              reference="Collection"
            >
              <TextField source={COLLECTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Document"
          target="collectionId"
          label="Documents"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="data" source="data" />
            <TextField label="version" source="version" />
            <TextField label="createdBy" source="createdBy" />
            <ReferenceField
              label="collection"
              source="collection.id"
              reference="Collection"
            >
              <TextField source={COLLECTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Schema"
          target="collectionId"
          label="Schemata"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="version" source="version" />
            <TextField label="definition" source="definition" />
            <ReferenceField
              label="collection"
              source="collection.id"
              reference="Collection"
            >
              <TextField source={COLLECTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Subscription"
          target="collectionId"
          label="Subscriptions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="event" source="event" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="collection"
              source="collection.id"
              reference="Collection"
            >
              <TextField source={COLLECTION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="query" source="query.id" reference="Query">
              <TextField source={QUERY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AnalyticsEvent"
          target="collectionId"
          label="AnalyticsEvents"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="eventType" source="eventType" />
            <TextField label="eventData" source="eventData" />
            <TextField label="timestamp" source="timestamp" />
            <TextField label="context" source="context" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="collection"
              source="collection.id"
              reference="Collection"
            >
              <TextField source={COLLECTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
