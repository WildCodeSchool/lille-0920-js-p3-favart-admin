import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const LogosList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="logos" />
        <EditButton basePath="/logos" />
        <DeleteButton basePath="/logos" />
      </Datagrid>
    </List>
  );
};

export default LogosList;
