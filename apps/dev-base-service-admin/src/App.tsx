import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CollectionList } from "./collection/CollectionList";
import { CollectionCreate } from "./collection/CollectionCreate";
import { CollectionEdit } from "./collection/CollectionEdit";
import { CollectionShow } from "./collection/CollectionShow";
import { QueryList } from "./query/QueryList";
import { QueryCreate } from "./query/QueryCreate";
import { QueryEdit } from "./query/QueryEdit";
import { QueryShow } from "./query/QueryShow";
import { BackupList } from "./backup/BackupList";
import { BackupCreate } from "./backup/BackupCreate";
import { BackupEdit } from "./backup/BackupEdit";
import { BackupShow } from "./backup/BackupShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { WebhookList } from "./webhook/WebhookList";
import { WebhookCreate } from "./webhook/WebhookCreate";
import { WebhookEdit } from "./webhook/WebhookEdit";
import { WebhookShow } from "./webhook/WebhookShow";
import { AnalyticsList } from "./analytics/AnalyticsList";
import { AnalyticsCreate } from "./analytics/AnalyticsCreate";
import { AnalyticsEdit } from "./analytics/AnalyticsEdit";
import { AnalyticsShow } from "./analytics/AnalyticsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { UserSessionList } from "./userSession/UserSessionList";
import { UserSessionCreate } from "./userSession/UserSessionCreate";
import { UserSessionEdit } from "./userSession/UserSessionEdit";
import { UserSessionShow } from "./userSession/UserSessionShow";
import { SchemaList } from "./schema/SchemaList";
import { SchemaCreate } from "./schema/SchemaCreate";
import { SchemaEdit } from "./schema/SchemaEdit";
import { SchemaShow } from "./schema/SchemaShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { FieldModelList } from "./fieldModel/FieldModelList";
import { FieldModelCreate } from "./fieldModel/FieldModelCreate";
import { FieldModelEdit } from "./fieldModel/FieldModelEdit";
import { FieldModelShow } from "./fieldModel/FieldModelShow";
import { IndexList } from "./index/IndexList";
import { IndexCreate } from "./index/IndexCreate";
import { IndexEdit } from "./index/IndexEdit";
import { IndexShow } from "./index/IndexShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { EndpointList } from "./endpoint/EndpointList";
import { EndpointCreate } from "./endpoint/EndpointCreate";
import { EndpointEdit } from "./endpoint/EndpointEdit";
import { EndpointShow } from "./endpoint/EndpointShow";
import { ApiKeyList } from "./apiKey/ApiKeyList";
import { ApiKeyCreate } from "./apiKey/ApiKeyCreate";
import { ApiKeyEdit } from "./apiKey/ApiKeyEdit";
import { ApiKeyShow } from "./apiKey/ApiKeyShow";
import { WebSocketList } from "./webSocket/WebSocketList";
import { WebSocketCreate } from "./webSocket/WebSocketCreate";
import { WebSocketEdit } from "./webSocket/WebSocketEdit";
import { WebSocketShow } from "./webSocket/WebSocketShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { AnalyticsEventList } from "./analyticsEvent/AnalyticsEventList";
import { AnalyticsEventCreate } from "./analyticsEvent/AnalyticsEventCreate";
import { AnalyticsEventEdit } from "./analyticsEvent/AnalyticsEventEdit";
import { AnalyticsEventShow } from "./analyticsEvent/AnalyticsEventShow";
import { DashboardList } from "./dashboard/DashboardList";
import { DashboardCreate } from "./dashboard/DashboardCreate";
import { DashboardEdit } from "./dashboard/DashboardEdit";
import { DashboardShow } from "./dashboard/DashboardShow";
import { PerformanceMetricList } from "./performanceMetric/PerformanceMetricList";
import { PerformanceMetricCreate } from "./performanceMetric/PerformanceMetricCreate";
import { PerformanceMetricEdit } from "./performanceMetric/PerformanceMetricEdit";
import { PerformanceMetricShow } from "./performanceMetric/PerformanceMetricShow";
import { WidgetList } from "./widget/WidgetList";
import { WidgetCreate } from "./widget/WidgetCreate";
import { WidgetEdit } from "./widget/WidgetEdit";
import { WidgetShow } from "./widget/WidgetShow";
import { CloudFunctionList } from "./cloudFunction/CloudFunctionList";
import { CloudFunctionCreate } from "./cloudFunction/CloudFunctionCreate";
import { CloudFunctionEdit } from "./cloudFunction/CloudFunctionEdit";
import { CloudFunctionShow } from "./cloudFunction/CloudFunctionShow";
import { PluginList } from "./plugin/PluginList";
import { PluginCreate } from "./plugin/PluginCreate";
import { PluginEdit } from "./plugin/PluginEdit";
import { PluginShow } from "./plugin/PluginShow";
import { AuditLogList } from "./auditLog/AuditLogList";
import { AuditLogCreate } from "./auditLog/AuditLogCreate";
import { AuditLogEdit } from "./auditLog/AuditLogEdit";
import { AuditLogShow } from "./auditLog/AuditLogShow";
import { AccessControlList } from "./accessControl/AccessControlList";
import { AccessControlCreate } from "./accessControl/AccessControlCreate";
import { AccessControlEdit } from "./accessControl/AccessControlEdit";
import { AccessControlShow } from "./accessControl/AccessControlShow";
import { EncryptionKeyList } from "./encryptionKey/EncryptionKeyList";
import { EncryptionKeyCreate } from "./encryptionKey/EncryptionKeyCreate";
import { EncryptionKeyEdit } from "./encryptionKey/EncryptionKeyEdit";
import { EncryptionKeyShow } from "./encryptionKey/EncryptionKeyShow";
import { BackupScheduleList } from "./backupSchedule/BackupScheduleList";
import { BackupScheduleCreate } from "./backupSchedule/BackupScheduleCreate";
import { BackupScheduleEdit } from "./backupSchedule/BackupScheduleEdit";
import { BackupScheduleShow } from "./backupSchedule/BackupScheduleShow";
import { RestorePointList } from "./restorePoint/RestorePointList";
import { RestorePointCreate } from "./restorePoint/RestorePointCreate";
import { RestorePointEdit } from "./restorePoint/RestorePointEdit";
import { RestorePointShow } from "./restorePoint/RestorePointShow";
import { CacheList } from "./cache/CacheList";
import { CacheCreate } from "./cache/CacheCreate";
import { CacheEdit } from "./cache/CacheEdit";
import { CacheShow } from "./cache/CacheShow";
import { QueryCacheList } from "./queryCache/QueryCacheList";
import { QueryCacheCreate } from "./queryCache/QueryCacheCreate";
import { QueryCacheEdit } from "./queryCache/QueryCacheEdit";
import { QueryCacheShow } from "./queryCache/QueryCacheShow";
import { RateLimiterList } from "./rateLimiter/RateLimiterList";
import { RateLimiterCreate } from "./rateLimiter/RateLimiterCreate";
import { RateLimiterEdit } from "./rateLimiter/RateLimiterEdit";
import { RateLimiterShow } from "./rateLimiter/RateLimiterShow";
import { MigrationList } from "./migration/MigrationList";
import { MigrationCreate } from "./migration/MigrationCreate";
import { MigrationEdit } from "./migration/MigrationEdit";
import { MigrationShow } from "./migration/MigrationShow";
import { ChangeLogList } from "./changeLog/ChangeLogList";
import { ChangeLogCreate } from "./changeLog/ChangeLogCreate";
import { ChangeLogEdit } from "./changeLog/ChangeLogEdit";
import { ChangeLogShow } from "./changeLog/ChangeLogShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
import { ApiDocumentationList } from "./apiDocumentation/ApiDocumentationList";
import { ApiDocumentationCreate } from "./apiDocumentation/ApiDocumentationCreate";
import { ApiDocumentationEdit } from "./apiDocumentation/ApiDocumentationEdit";
import { ApiDocumentationShow } from "./apiDocumentation/ApiDocumentationShow";
import { MetadataList } from "./metadata/MetadataList";
import { MetadataCreate } from "./metadata/MetadataCreate";
import { MetadataEdit } from "./metadata/MetadataEdit";
import { MetadataShow } from "./metadata/MetadataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DevBaseService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Collection"
          list={CollectionList}
          edit={CollectionEdit}
          create={CollectionCreate}
          show={CollectionShow}
        />
        <Resource
          name="Query"
          list={QueryList}
          edit={QueryEdit}
          create={QueryCreate}
          show={QueryShow}
        />
        <Resource
          name="Backup"
          list={BackupList}
          edit={BackupEdit}
          create={BackupCreate}
          show={BackupShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Webhook"
          list={WebhookList}
          edit={WebhookEdit}
          create={WebhookCreate}
          show={WebhookShow}
        />
        <Resource
          name="Analytics"
          list={AnalyticsList}
          edit={AnalyticsEdit}
          create={AnalyticsCreate}
          show={AnalyticsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="UserSession"
          list={UserSessionList}
          edit={UserSessionEdit}
          create={UserSessionCreate}
          show={UserSessionShow}
        />
        <Resource
          name="Schema"
          list={SchemaList}
          edit={SchemaEdit}
          create={SchemaCreate}
          show={SchemaShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="FieldModel"
          list={FieldModelList}
          edit={FieldModelEdit}
          create={FieldModelCreate}
          show={FieldModelShow}
        />
        <Resource
          name="Index"
          list={IndexList}
          edit={IndexEdit}
          create={IndexCreate}
          show={IndexShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="Endpoint"
          list={EndpointList}
          edit={EndpointEdit}
          create={EndpointCreate}
          show={EndpointShow}
        />
        <Resource
          name="ApiKey"
          list={ApiKeyList}
          edit={ApiKeyEdit}
          create={ApiKeyCreate}
          show={ApiKeyShow}
        />
        <Resource
          name="WebSocket"
          list={WebSocketList}
          edit={WebSocketEdit}
          create={WebSocketCreate}
          show={WebSocketShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="AnalyticsEvent"
          list={AnalyticsEventList}
          edit={AnalyticsEventEdit}
          create={AnalyticsEventCreate}
          show={AnalyticsEventShow}
        />
        <Resource
          name="Dashboard"
          list={DashboardList}
          edit={DashboardEdit}
          create={DashboardCreate}
          show={DashboardShow}
        />
        <Resource
          name="PerformanceMetric"
          list={PerformanceMetricList}
          edit={PerformanceMetricEdit}
          create={PerformanceMetricCreate}
          show={PerformanceMetricShow}
        />
        <Resource
          name="Widget"
          list={WidgetList}
          edit={WidgetEdit}
          create={WidgetCreate}
          show={WidgetShow}
        />
        <Resource
          name="CloudFunction"
          list={CloudFunctionList}
          edit={CloudFunctionEdit}
          create={CloudFunctionCreate}
          show={CloudFunctionShow}
        />
        <Resource
          name="Plugin"
          list={PluginList}
          edit={PluginEdit}
          create={PluginCreate}
          show={PluginShow}
        />
        <Resource
          name="AuditLog"
          list={AuditLogList}
          edit={AuditLogEdit}
          create={AuditLogCreate}
          show={AuditLogShow}
        />
        <Resource
          name="AccessControl"
          list={AccessControlList}
          edit={AccessControlEdit}
          create={AccessControlCreate}
          show={AccessControlShow}
        />
        <Resource
          name="EncryptionKey"
          list={EncryptionKeyList}
          edit={EncryptionKeyEdit}
          create={EncryptionKeyCreate}
          show={EncryptionKeyShow}
        />
        <Resource
          name="BackupSchedule"
          list={BackupScheduleList}
          edit={BackupScheduleEdit}
          create={BackupScheduleCreate}
          show={BackupScheduleShow}
        />
        <Resource
          name="RestorePoint"
          list={RestorePointList}
          edit={RestorePointEdit}
          create={RestorePointCreate}
          show={RestorePointShow}
        />
        <Resource
          name="Cache"
          list={CacheList}
          edit={CacheEdit}
          create={CacheCreate}
          show={CacheShow}
        />
        <Resource
          name="QueryCache"
          list={QueryCacheList}
          edit={QueryCacheEdit}
          create={QueryCacheCreate}
          show={QueryCacheShow}
        />
        <Resource
          name="RateLimiter"
          list={RateLimiterList}
          edit={RateLimiterEdit}
          create={RateLimiterCreate}
          show={RateLimiterShow}
        />
        <Resource
          name="Migration"
          list={MigrationList}
          edit={MigrationEdit}
          create={MigrationCreate}
          show={MigrationShow}
        />
        <Resource
          name="ChangeLog"
          list={ChangeLogList}
          edit={ChangeLogEdit}
          create={ChangeLogCreate}
          show={ChangeLogShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
        <Resource
          name="ApiDocumentation"
          list={ApiDocumentationList}
          edit={ApiDocumentationEdit}
          create={ApiDocumentationCreate}
          show={ApiDocumentationShow}
        />
        <Resource
          name="Metadata"
          list={MetadataList}
          edit={MetadataEdit}
          create={MetadataCreate}
          show={MetadataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
