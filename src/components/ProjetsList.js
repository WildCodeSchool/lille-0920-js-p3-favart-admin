import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const ProjetsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="logo" />
        <TextField source="titre" />
        <TextField source="porteurs" />
        <TextField source="enjeux" />
        <TextField source="missions" />
        <TextField source="partenaires" />
        <TextField source="territoires" />
        <TextField source="outils" />
        <EditButton basePath="/projets" />
        <DeleteButton basePath="/projets" />
      </Datagrid>
    </List>
  );
};

export default ProjetsList;
