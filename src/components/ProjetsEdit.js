import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const ProjetsEdit = (props) => {
  return (
    <Edit title="Modifiez votre project" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="logo" />
        <TextInput source="titre" />
        <TextInput source="porteurs" />
        <TextInput multiline source="enjeux" />
        <TextInput multiline source="missions" />
        <TextInput multiline source="partenaires" />
        <TextInput multiline source="territoires" />
        <TextInput multiline source="outils" />
      </SimpleForm>
    </Edit>
  );
};

export default ProjetsEdit;
