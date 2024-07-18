import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
} from "react-admin";

import { UserProfileTitle } from "../userProfile/UserProfileTitle";
import { UserSessionTitle } from "../userSession/UserSessionTitle";
import { UserRoleTitle } from "../userRole/UserRoleTitle";
import { WebSocketTitle } from "../webSocket/WebSocketTitle";
import { ApiKeyTitle } from "../apiKey/ApiKeyTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";
import { AnalyticsEventTitle } from "../analyticsEvent/AnalyticsEventTitle";
import { AuditLogTitle } from "../auditLog/AuditLogTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <DateTimeInput label="lastLogin" source="lastLogin" />
        <BooleanInput label="isActive" source="isActive" />
        <div />
        <BooleanInput label="twoFactorEnabled" source="twoFactorEnabled" />
        <TextInput label="preferredLanguage" source="preferredLanguage" />
        <TextInput label="timezone" source="timezone" />
        <ReferenceArrayInput
          source="userProfiles"
          reference="UserProfile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserProfileTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userSessions"
          reference="UserSession"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserSessionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userRoles"
          reference="UserRole"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserRoleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="webSockets"
          reference="WebSocket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebSocketTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="apiKeys"
          reference="ApiKey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiKeyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="subscriptions"
          reference="Subscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="analyticsEvents"
          reference="AnalyticsEvent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalyticsEventTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="auditLogs"
          reference="AuditLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AuditLogTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
