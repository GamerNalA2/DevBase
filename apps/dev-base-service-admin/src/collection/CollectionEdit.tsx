import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { IndexTitle } from "../index/IndexTitle";
import { DocumentTitle } from "../document/DocumentTitle";
import { SchemaTitle } from "../schema/SchemaTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";
import { AnalyticsEventTitle } from "../analyticsEvent/AnalyticsEventTitle";

export const CollectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <BooleanInput label="isSchemaless" source="isSchemaless" />
        <NumberInput step={1} label="version" source="version" />
        <BooleanInput label="isPublic" source="isPublic" />
        <ReferenceArrayInput
          source="indices"
          reference="Index"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IndexTitle} />
        </ReferenceArrayInput>
        <TextInput label="owner" source="owner" />
        <ReferenceArrayInput
          source="documents"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="schemata"
          reference="Schema"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SchemaTitle} />
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
      </SimpleForm>
    </Edit>
  );
};
