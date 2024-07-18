import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CacheEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <div />
        <NumberInput step={1} label="ttl" source="ttl" />
        <DateTimeInput label="lastAccessed" source="lastAccessed" />
      </SimpleForm>
    </Edit>
  );
};
