import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ChangeLogController } from "../changeLog.controller";
import { ChangeLogService } from "../changeLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  entityType: "exampleEntityType",
  entity: "exampleEntity",
  changeType: "exampleChangeType",
  version: 42,
  createdBy: "exampleCreatedBy",
  entityTypeField: "exampleEntityTypeField",
  versionField: 42,
  entityField: "exampleEntityField",
  changeTypeField: "exampleChangeTypeField",
  createdByField: "exampleCreatedByField",
  createdAtField: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  entityType: "exampleEntityType",
  entity: "exampleEntity",
  changeType: "exampleChangeType",
  version: 42,
  createdBy: "exampleCreatedBy",
  entityTypeField: "exampleEntityTypeField",
  versionField: 42,
  entityField: "exampleEntityField",
  changeTypeField: "exampleChangeTypeField",
  createdByField: "exampleCreatedByField",
  createdAtField: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    entityType: "exampleEntityType",
    entity: "exampleEntity",
    changeType: "exampleChangeType",
    version: 42,
    createdBy: "exampleCreatedBy",
    entityTypeField: "exampleEntityTypeField",
    versionField: 42,
    entityField: "exampleEntityField",
    changeTypeField: "exampleChangeTypeField",
    createdByField: "exampleCreatedByField",
    createdAtField: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  entityType: "exampleEntityType",
  entity: "exampleEntity",
  changeType: "exampleChangeType",
  version: 42,
  createdBy: "exampleCreatedBy",
  entityTypeField: "exampleEntityTypeField",
  versionField: 42,
  entityField: "exampleEntityField",
  changeTypeField: "exampleChangeTypeField",
  createdByField: "exampleCreatedByField",
  createdAtField: new Date(),
};

const service = {
  createChangeLog() {
    return CREATE_RESULT;
  },
  changeLogs: () => FIND_MANY_RESULT,
  changeLog: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ChangeLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ChangeLogService,
          useValue: service,
        },
      ],
      controllers: [ChangeLogController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /changeLogs", async () => {
    await request(app.getHttpServer())
      .post("/changeLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        createdAtField: CREATE_RESULT.createdAtField.toISOString(),
      });
  });

  test("GET /changeLogs", async () => {
    await request(app.getHttpServer())
      .get("/changeLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          createdAtField: FIND_MANY_RESULT[0].createdAtField.toISOString(),
        },
      ]);
  });

  test("GET /changeLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/changeLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /changeLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/changeLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        createdAtField: FIND_ONE_RESULT.createdAtField.toISOString(),
      });
  });

  test("POST /changeLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/changeLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        createdAtField: CREATE_RESULT.createdAtField.toISOString(),
      })
      .then(function () {
        agent
          .post("/changeLogs")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
