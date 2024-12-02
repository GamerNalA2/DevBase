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
import { EncryptionKeyController } from "../encryptionKey.controller";
import { EncryptionKeyService } from "../encryptionKey.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  purpose: "examplePurpose",
  algorithm: "exampleAlgorithm",
  key: "exampleKey",
  rotatedAt: new Date(),
  status: "exampleStatus",
  encPurpose: "exampleEncPurpose",
  encAlgorithm: "exampleEncAlgorithm",
  encKey: "exampleEncKey",
  encCreatedAt: new Date(),
  encStatus: "exampleEncStatus",
  encRotatedAt: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  purpose: "examplePurpose",
  algorithm: "exampleAlgorithm",
  key: "exampleKey",
  rotatedAt: new Date(),
  status: "exampleStatus",
  encPurpose: "exampleEncPurpose",
  encAlgorithm: "exampleEncAlgorithm",
  encKey: "exampleEncKey",
  encCreatedAt: new Date(),
  encStatus: "exampleEncStatus",
  encRotatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    purpose: "examplePurpose",
    algorithm: "exampleAlgorithm",
    key: "exampleKey",
    rotatedAt: new Date(),
    status: "exampleStatus",
    encPurpose: "exampleEncPurpose",
    encAlgorithm: "exampleEncAlgorithm",
    encKey: "exampleEncKey",
    encCreatedAt: new Date(),
    encStatus: "exampleEncStatus",
    encRotatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  purpose: "examplePurpose",
  algorithm: "exampleAlgorithm",
  key: "exampleKey",
  rotatedAt: new Date(),
  status: "exampleStatus",
  encPurpose: "exampleEncPurpose",
  encAlgorithm: "exampleEncAlgorithm",
  encKey: "exampleEncKey",
  encCreatedAt: new Date(),
  encStatus: "exampleEncStatus",
  encRotatedAt: new Date(),
};

const service = {
  createEncryptionKey() {
    return CREATE_RESULT;
  },
  encryptionKeys: () => FIND_MANY_RESULT,
  encryptionKey: ({ where }: { where: { id: string } }) => {
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

describe("EncryptionKey", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EncryptionKeyService,
          useValue: service,
        },
      ],
      controllers: [EncryptionKeyController],
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

  test("POST /encryptionKeys", async () => {
    await request(app.getHttpServer())
      .post("/encryptionKeys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        rotatedAt: CREATE_RESULT.rotatedAt.toISOString(),
        encCreatedAt: CREATE_RESULT.encCreatedAt.toISOString(),
        encRotatedAt: CREATE_RESULT.encRotatedAt.toISOString(),
      });
  });

  test("GET /encryptionKeys", async () => {
    await request(app.getHttpServer())
      .get("/encryptionKeys")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          rotatedAt: FIND_MANY_RESULT[0].rotatedAt.toISOString(),
          encCreatedAt: FIND_MANY_RESULT[0].encCreatedAt.toISOString(),
          encRotatedAt: FIND_MANY_RESULT[0].encRotatedAt.toISOString(),
        },
      ]);
  });

  test("GET /encryptionKeys/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/encryptionKeys"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /encryptionKeys/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/encryptionKeys"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        rotatedAt: FIND_ONE_RESULT.rotatedAt.toISOString(),
        encCreatedAt: FIND_ONE_RESULT.encCreatedAt.toISOString(),
        encRotatedAt: FIND_ONE_RESULT.encRotatedAt.toISOString(),
      });
  });

  test("POST /encryptionKeys existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/encryptionKeys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        rotatedAt: CREATE_RESULT.rotatedAt.toISOString(),
        encCreatedAt: CREATE_RESULT.encCreatedAt.toISOString(),
        encRotatedAt: CREATE_RESULT.encRotatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/encryptionKeys")
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
