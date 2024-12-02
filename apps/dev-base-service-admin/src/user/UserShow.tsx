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

import { USER_TITLE_FIELD } from "./UserTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";
import { COLLECTION_TITLE_FIELD } from "../collection/CollectionTitle";
import { QUERY_TITLE_FIELD } from "../query/QueryTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="lastLogin" source="lastLogin" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="profilePicture" source="profilePicture" />
        <BooleanField label="twoFactorEnabled" source="twoFactorEnabled" />
        <TextField label="preferredLanguage" source="preferredLanguage" />
        <TextField label="timezone" source="timezone" />
        <ReferenceManyField
          reference="UserProfile"
          target="userId"
          label="UserProfiles"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="bio" source="bio" />
            <TextField label="location" source="location" />
            <TextField label="website" source="website" />
            <TextField label="socialLinks" source="socialLinks" />
            <TextField label="skills" source="skills" />
            <TextField label="experience" source="experience" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserSession"
          target="userId"
          label="UserSessions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="deviceInfo" source="deviceInfo" />
            <TextField label="token" source="token" />
            <TextField label="ipAddress" source="ipAddress" />
            <TextField label="startTime" source="startTime" />
            <TextField label="endTime" source="endTime" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserRole"
          target="userId"
          label="UserRoles"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="assignedAt" source="assignedAt" />
            <TextField label="assignedBy" source="assignedBy" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WebSocket"
          target="userId"
          label="WebSockets"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="disconnectedAt" source="disconnectedAt" />
            <TextField label="connectionId" source="connectionId" />
            <TextField label="status" source="status" />
            <TextField label="connectedAt" source="connectedAt" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="ApiKey" target="userId" label="ApiKeys">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="key" source="key" />
            <TextField label="name" source="name" />
            <TextField label="scopes" source="scopes" />
            <TextField label="expiresAt" source="expiresAt" />
            <TextField label="lastUsed" source="lastUsed" />
            <TextField label="rateLimit" source="rateLimit" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Subscription"
          target="userId"
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
          target="userId"
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
        <ReferenceManyField
          reference="AuditLog"
          target="userId"
          label="AuditLogs"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="actionType" source="actionType" />
            <TextField label="entityType" source="entityType" />
            <TextField label="changes" source="changes" />
            <TextField label="timestamp" source="timestamp" />
            <TextField label="ipAddress" source="ipAddress" />
            <TextField label="entity" source="entity" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="userId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="type" source="typeField" />
            <TextField label="content" source="content" />
            <BooleanField label="isRead" source="isRead" />
            <TextField label="createdAtField" source="createdAtField" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
