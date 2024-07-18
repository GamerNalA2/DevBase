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
import { WebSocketController } from "../webSocket.controller";
import { WebSocketService } from "../webSocket.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  disconnectedAt: new Date(),
  connectionId: "exampleConnectionId",
  status: "exampleStatus",
  connectedAt: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  disconnectedAt: new Date(),
  connectionId: "exampleConnectionId",
  status: "exampleStatus",
  connectedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    disconnectedAt: new Date(),
    connectionId: "exampleConnectionId",
    status: "exampleStatus",
    connectedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  disconnectedAt: new Date(),
  connectionId: "exampleConnectionId",
  status: "exampleStatus",
  connectedAt: new Date(),
};

const service = {
  createWebSocket() {
    return CREATE_RESULT;
  },
  webSockets: () => FIND_MANY_RESULT,
  webSocket: ({ where }: { where: { id: string } }) => {
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

describe("WebSocket", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WebSocketService,
          useValue: service,
        },
      ],
      controllers: [WebSocketController],
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

  test("POST /webSockets", async () => {
    await request(app.getHttpServer())
      .post("/webSockets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        disconnectedAt: CREATE_RESULT.disconnectedAt.toISOString(),
        connectedAt: CREATE_RESULT.connectedAt.toISOString(),
      });
  });

  test("GET /webSockets", async () => {
    await request(app.getHttpServer())
      .get("/webSockets")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          disconnectedAt: FIND_MANY_RESULT[0].disconnectedAt.toISOString(),
          connectedAt: FIND_MANY_RESULT[0].connectedAt.toISOString(),
        },
      ]);
  });

  test("GET /webSockets/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/webSockets"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /webSockets/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/webSockets"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        disconnectedAt: FIND_ONE_RESULT.disconnectedAt.toISOString(),
        connectedAt: FIND_ONE_RESULT.connectedAt.toISOString(),
      });
  });

  test("POST /webSockets existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/webSockets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        disconnectedAt: CREATE_RESULT.disconnectedAt.toISOString(),
        connectedAt: CREATE_RESULT.connectedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/webSockets")
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
