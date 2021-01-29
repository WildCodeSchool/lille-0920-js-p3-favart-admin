import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const LogosEdit = (props) => {
  return (
    <Edit title="Modifiez votre liste de logos" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="titre" />

        <TextInput source="lien_url" />
      </SimpleForm>
    </Edit>
  );
};

export default LogosEdit;
