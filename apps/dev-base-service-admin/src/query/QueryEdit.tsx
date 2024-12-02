import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";
import { QueryCacheTitle } from "../queryCache/QueryCacheTitle";

export const QueryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="subscriptions"
          reference="Subscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="queryCaches"
          reference="QueryCache"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueryCacheTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
