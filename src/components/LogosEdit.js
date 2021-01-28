import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const LogosEdit = (props) => {
  return (
    <Edit title="Modifiez votre liste de logos" {...props}>
      <SimpleForm>
        <TextInput disabled source="idLogos" />
        <TextInput source="Logos" />

      </SimpleForm>
    </Edit>
  );
};

export default LogosEdit;
