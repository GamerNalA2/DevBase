import { Module } from "@nestjs/common";
import { CollectionModule } from "./collection/collection.module";
import { QueryModule } from "./query/query.module";
import { BackupModule } from "./backup/backup.module";
import { RoleModule } from "./role/role.module";
import { WebhookModule } from "./webhook/webhook.module";
import { AnalyticsModule } from "./analytics/analytics.module";
import { UserModule } from "./user/user.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { UserProfileModule } from "./userProfile/userProfile.module";
import { UserSessionModule } from "./userSession/userSession.module";
import { SchemaModule } from "./schema/schema.module";
import { DocumentModule } from "./document/document.module";
import { FieldModelModule } from "./fieldModel/fieldModel.module";
import { IndexModule } from "./index/index.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { EndpointModule } from "./endpoint/endpoint.module";
import { ApiKeyModule } from "./apiKey/apiKey.module";
import { WebSocketModule } from "./webSocket/webSocket.module";
import { EventModule } from "./event/event.module";
import { AnalyticsEventModule } from "./analyticsEvent/analyticsEvent.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { PerformanceMetricModule } from "./performanceMetric/performanceMetric.module";
import { WidgetModule } from "./widget/widget.module";
import { CloudFunctionModule } from "./cloudFunction/cloudFunction.module";
import { PluginModule } from "./plugin/plugin.module";
import { AuditLogModule } from "./auditLog/auditLog.module";
import { AccessControlModule } from "./accessControl/accessControl.module";
import { EncryptionKeyModule } from "./encryptionKey/encryptionKey.module";
import { BackupScheduleModule } from "./backupSchedule/backupSchedule.module";
import { RestorePointModule } from "./restorePoint/restorePoint.module";
import { CacheModule } from "./cache/cache.module";
import { QueryCacheModule } from "./queryCache/queryCache.module";
import { RateLimiterModule } from "./rateLimiter/rateLimiter.module";
import { MigrationModule } from "./migration/migration.module";
import { ChangeLogModule } from "./changeLog/changeLog.module";
import { NotificationModule } from "./notification/notification.module";
import { AlertModule } from "./alert/alert.module";
import { ApiDocumentationModule } from "./apiDocumentation/apiDocumentation.module";
import { MetadataModule } from "./metadata/metadata.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CollectionModule,
    QueryModule,
    BackupModule,
    RoleModule,
    WebhookModule,
    AnalyticsModule,
    UserModule,
    UserRoleModule,
    UserProfileModule,
    UserSessionModule,
    SchemaModule,
    DocumentModule,
    FieldModelModule,
    IndexModule,
    SubscriptionModule,
    EndpointModule,
    ApiKeyModule,
    WebSocketModule,
    EventModule,
    AnalyticsEventModule,
    DashboardModule,
    PerformanceMetricModule,
    WidgetModule,
    CloudFunctionModule,
    PluginModule,
    AuditLogModule,
    AccessControlModule,
    EncryptionKeyModule,
    BackupScheduleModule,
    RestorePointModule,
    CacheModule,
    QueryCacheModule,
    RateLimiterModule,
    MigrationModule,
    ChangeLogModule,
    NotificationModule,
    AlertModule,
    ApiDocumentationModule,
    MetadataModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
