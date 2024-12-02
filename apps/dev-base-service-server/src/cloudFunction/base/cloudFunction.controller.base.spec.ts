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
import { CloudFunctionController } from "../cloudFunction.controller";
import { CloudFunctionService } from "../cloudFunction.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  runtime: "exampleRuntime",
  trigger: "exampleTrigger",
  lastExecuted: new Date(),
  timeout: 42,
  memorySize: 42,
  code: "exampleCode",
  version: 42,
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  runtime: "exampleRuntime",
  trigger: "exampleTrigger",
  lastExecuted: new Date(),
  timeout: 42,
  memorySize: 42,
  code: "exampleCode",
  version: 42,
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "exampleName",
    runtime: "exampleRuntime",
    trigger: "exampleTrigger",
    lastExecuted: new Date(),
    timeout: 42,
    memorySize: 42,
    code: "exampleCode",
    version: 42,
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  runtime: "exampleRuntime",
  trigger: "exampleTrigger",
  lastExecuted: new Date(),
  timeout: 42,
  memorySize: 42,
  code: "exampleCode",
  version: 42,
};

const service = {
  createCloudFunction() {
    return CREATE_RESULT;
  },
  cloudFunctions: () => FIND_MANY_RESULT,
  cloudFunction: ({ where }: { where: { id: string } }) => {
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

describe("CloudFunction", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CloudFunctionService,
          useValue: service,
        },
      ],
      controllers: [CloudFunctionController],
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

  test("POST /cloudFunctions", async () => {
    await request(app.getHttpServer())
      .post("/cloudFunctions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        lastExecuted: CREATE_RESULT.lastExecuted.toISOString(),
      });
  });

  test("GET /cloudFunctions", async () => {
    await request(app.getHttpServer())
      .get("/cloudFunctions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          lastExecuted: FIND_MANY_RESULT[0].lastExecuted.toISOString(),
        },
      ]);
  });

  test("GET /cloudFunctions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cloudFunctions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cloudFunctions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cloudFunctions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        lastExecuted: FIND_ONE_RESULT.lastExecuted.toISOString(),
      });
  });

  test("POST /cloudFunctions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cloudFunctions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        lastExecuted: CREATE_RESULT.lastExecuted.toISOString(),
      })
      .then(function () {
        agent
          .post("/cloudFunctions")
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
