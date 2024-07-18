import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const PluginCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="version" source="version" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="entryPoint" source="entryPoint" />
        <div />
        <BooleanInput label="isActive" source="isActive" />
        <DateTimeInput label="installedAt" source="installedAt" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="pluginVersion" source="pluginVersion" />
        <div />
        <DateTimeInput label="updatedOn" source="updatedOn" />
        <TextInput label="pluginEntryPoint" source="pluginEntryPoint" />
        <div />
        <BooleanInput label="pluginIsActive" source="pluginIsActive" />
        <TextInput label="pluginName" source="pluginName" />
        <TextInput
          label="pluginDescription"
          multiline
          source="pluginDescription"
        />
        <DateTimeInput label="pluginInstalledAt" source="pluginInstalledAt" />
        <DateTimeInput label="pluginUpdatedAt" source="pluginUpdatedAt" />
        <TextInput label="pluginDesc" multiline source="pluginDesc" />
        <DateTimeInput label="pluginInstalled" source="pluginInstalled" />
        <NumberInput step={1} label="pluginVer" source="pluginVer" />
        <TextInput label="pluginEntry" source="pluginEntry" />
        <div />
        <BooleanInput label="pluginActive" source="pluginActive" />
        <DateTimeInput label="pluginUpdated" source="pluginUpdated" />
        <NumberInput step={1} label="pluginVerField" source="pluginVerField" />
        <TextInput label="pluginDescField" multiline source="pluginDescField" />
        <TextInput label="pluginEntryField" source="pluginEntryField" />
        <div />
        <DateTimeInput
          label="pluginInstalledField"
          source="pluginInstalledField"
        />
        <BooleanInput label="pluginActiveField" source="pluginActiveField" />
        <DateTimeInput label="pluginUpdatedField" source="pluginUpdatedField" />
        <TextInput label="pluginNameField" source="pluginNameField" />
      </SimpleForm>
    </Create>
  );
};
