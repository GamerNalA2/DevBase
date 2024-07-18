import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PluginList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Plugins"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="version" source="version" />
        <TextField label="description" source="description" />
        <TextField label="entryPoint" source="entryPoint" />
        <TextField label="config" source="configField" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="installedAt" source="installedAt" />
        <TextField label="name" source="name" />
        <TextField label="pluginVersion" source="pluginVersion" />
        <TextField label="configuration" source="configuration" />
        <TextField label="updatedOn" source="updatedOn" />
        <TextField label="pluginEntryPoint" source="pluginEntryPoint" />
        <TextField label="pluginConfiguration" source="pluginConfiguration" />
        <BooleanField label="pluginIsActive" source="pluginIsActive" />
        <TextField label="pluginName" source="pluginName" />
        <TextField label="pluginDescription" source="pluginDescription" />
        <TextField label="pluginInstalledAt" source="pluginInstalledAt" />
        <TextField label="pluginUpdatedAt" source="pluginUpdatedAt" />
        <TextField label="pluginDesc" source="pluginDesc" />
        <TextField label="pluginInstalled" source="pluginInstalled" />
        <TextField label="pluginVer" source="pluginVer" />
        <TextField label="pluginEntry" source="pluginEntry" />
        <TextField label="pluginConf" source="pluginConf" />
        <BooleanField label="pluginActive" source="pluginActive" />
        <TextField label="pluginUpdated" source="pluginUpdated" />
        <TextField label="pluginVerField" source="pluginVerField" />
        <TextField label="pluginDescField" source="pluginDescField" />
        <TextField label="pluginEntryField" source="pluginEntryField" />
        <TextField label="pluginConfField" source="pluginConfField" />
        <TextField label="pluginInstalledField" source="pluginInstalledField" />
        <BooleanField label="pluginActiveField" source="pluginActiveField" />
        <TextField label="pluginUpdatedField" source="pluginUpdatedField" />
        <TextField label="pluginNameField" source="pluginNameField" />
      </Datagrid>
    </List>
  );
};
