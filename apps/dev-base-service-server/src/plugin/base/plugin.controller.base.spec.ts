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
import { PluginController } from "../plugin.controller";
import { PluginService } from "../plugin.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  version: 42,
  description: "exampleDescription",
  entryPoint: "exampleEntryPoint",
  isActive: "true",
  installedAt: new Date(),
  name: "exampleName",
  pluginVersion: 42,
  updatedOn: new Date(),
  pluginEntryPoint: "examplePluginEntryPoint",
  pluginIsActive: "true",
  pluginName: "examplePluginName",
  pluginDescription: "examplePluginDescription",
  pluginInstalledAt: new Date(),
  pluginUpdatedAt: new Date(),
  pluginDesc: "examplePluginDesc",
  pluginInstalled: new Date(),
  pluginVer: 42,
  pluginEntry: "examplePluginEntry",
  pluginActive: "true",
  pluginUpdated: new Date(),
  pluginVerField: 42,
  pluginDescField: "examplePluginDescField",
  pluginEntryField: "examplePluginEntryField",
  pluginInstalledField: new Date(),
  pluginActiveField: "true",
  pluginUpdatedField: new Date(),
  pluginNameField: "examplePluginNameField",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  version: 42,
  description: "exampleDescription",
  entryPoint: "exampleEntryPoint",
  isActive: "true",
  installedAt: new Date(),
  name: "exampleName",
  pluginVersion: 42,
  updatedOn: new Date(),
  pluginEntryPoint: "examplePluginEntryPoint",
  pluginIsActive: "true",
  pluginName: "examplePluginName",
  pluginDescription: "examplePluginDescription",
  pluginInstalledAt: new Date(),
  pluginUpdatedAt: new Date(),
  pluginDesc: "examplePluginDesc",
  pluginInstalled: new Date(),
  pluginVer: 42,
  pluginEntry: "examplePluginEntry",
  pluginActive: "true",
  pluginUpdated: new Date(),
  pluginVerField: 42,
  pluginDescField: "examplePluginDescField",
  pluginEntryField: "examplePluginEntryField",
  pluginInstalledField: new Date(),
  pluginActiveField: "true",
  pluginUpdatedField: new Date(),
  pluginNameField: "examplePluginNameField",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    version: 42,
    description: "exampleDescription",
    entryPoint: "exampleEntryPoint",
    isActive: "true",
    installedAt: new Date(),
    name: "exampleName",
    pluginVersion: 42,
    updatedOn: new Date(),
    pluginEntryPoint: "examplePluginEntryPoint",
    pluginIsActive: "true",
    pluginName: "examplePluginName",
    pluginDescription: "examplePluginDescription",
    pluginInstalledAt: new Date(),
    pluginUpdatedAt: new Date(),
    pluginDesc: "examplePluginDesc",
    pluginInstalled: new Date(),
    pluginVer: 42,
    pluginEntry: "examplePluginEntry",
    pluginActive: "true",
    pluginUpdated: new Date(),
    pluginVerField: 42,
    pluginDescField: "examplePluginDescField",
    pluginEntryField: "examplePluginEntryField",
    pluginInstalledField: new Date(),
    pluginActiveField: "true",
    pluginUpdatedField: new Date(),
    pluginNameField: "examplePluginNameField",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  version: 42,
  description: "exampleDescription",
  entryPoint: "exampleEntryPoint",
  isActive: "true",
  installedAt: new Date(),
  name: "exampleName",
  pluginVersion: 42,
  updatedOn: new Date(),
  pluginEntryPoint: "examplePluginEntryPoint",
  pluginIsActive: "true",
  pluginName: "examplePluginName",
  pluginDescription: "examplePluginDescription",
  pluginInstalledAt: new Date(),
  pluginUpdatedAt: new Date(),
  pluginDesc: "examplePluginDesc",
  pluginInstalled: new Date(),
  pluginVer: 42,
  pluginEntry: "examplePluginEntry",
  pluginActive: "true",
  pluginUpdated: new Date(),
  pluginVerField: 42,
  pluginDescField: "examplePluginDescField",
  pluginEntryField: "examplePluginEntryField",
  pluginInstalledField: new Date(),
  pluginActiveField: "true",
  pluginUpdatedField: new Date(),
  pluginNameField: "examplePluginNameField",
};

const service = {
  createPlugin() {
    return CREATE_RESULT;
  },
  plugins: () => FIND_MANY_RESULT,
  plugin: ({ where }: { where: { id: string } }) => {
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

describe("Plugin", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PluginService,
          useValue: service,
        },
      ],
      controllers: [PluginController],
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

  test("POST /plugins", async () => {
    await request(app.getHttpServer())
      .post("/plugins")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        installedAt: CREATE_RESULT.installedAt.toISOString(),
        updatedOn: CREATE_RESULT.updatedOn.toISOString(),
        pluginInstalledAt: CREATE_RESULT.pluginInstalledAt.toISOString(),
        pluginUpdatedAt: CREATE_RESULT.pluginUpdatedAt.toISOString(),
        pluginInstalled: CREATE_RESULT.pluginInstalled.toISOString(),
        pluginUpdated: CREATE_RESULT.pluginUpdated.toISOString(),
        pluginInstalledField: CREATE_RESULT.pluginInstalledField.toISOString(),
        pluginUpdatedField: CREATE_RESULT.pluginUpdatedField.toISOString(),
      });
  });

  test("GET /plugins", async () => {
    await request(app.getHttpServer())
      .get("/plugins")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          installedAt: FIND_MANY_RESULT[0].installedAt.toISOString(),
          updatedOn: FIND_MANY_RESULT[0].updatedOn.toISOString(),
          pluginInstalledAt:
            FIND_MANY_RESULT[0].pluginInstalledAt.toISOString(),
          pluginUpdatedAt: FIND_MANY_RESULT[0].pluginUpdatedAt.toISOString(),
          pluginInstalled: FIND_MANY_RESULT[0].pluginInstalled.toISOString(),
          pluginUpdated: FIND_MANY_RESULT[0].pluginUpdated.toISOString(),
          pluginInstalledField:
            FIND_MANY_RESULT[0].pluginInstalledField.toISOString(),
          pluginUpdatedField:
            FIND_MANY_RESULT[0].pluginUpdatedField.toISOString(),
        },
      ]);
  });

  test("GET /plugins/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/plugins"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /plugins/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/plugins"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        installedAt: FIND_ONE_RESULT.installedAt.toISOString(),
        updatedOn: FIND_ONE_RESULT.updatedOn.toISOString(),
        pluginInstalledAt: FIND_ONE_RESULT.pluginInstalledAt.toISOString(),
        pluginUpdatedAt: FIND_ONE_RESULT.pluginUpdatedAt.toISOString(),
        pluginInstalled: FIND_ONE_RESULT.pluginInstalled.toISOString(),
        pluginUpdated: FIND_ONE_RESULT.pluginUpdated.toISOString(),
        pluginInstalledField:
          FIND_ONE_RESULT.pluginInstalledField.toISOString(),
        pluginUpdatedField: FIND_ONE_RESULT.pluginUpdatedField.toISOString(),
      });
  });

  test("POST /plugins existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/plugins")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        installedAt: CREATE_RESULT.installedAt.toISOString(),
        updatedOn: CREATE_RESULT.updatedOn.toISOString(),
        pluginInstalledAt: CREATE_RESULT.pluginInstalledAt.toISOString(),
        pluginUpdatedAt: CREATE_RESULT.pluginUpdatedAt.toISOString(),
        pluginInstalled: CREATE_RESULT.pluginInstalled.toISOString(),
        pluginUpdated: CREATE_RESULT.pluginUpdated.toISOString(),
        pluginInstalledField: CREATE_RESULT.pluginInstalledField.toISOString(),
        pluginUpdatedField: CREATE_RESULT.pluginUpdatedField.toISOString(),
      })
      .then(function () {
        agent
          .post("/plugins")
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
