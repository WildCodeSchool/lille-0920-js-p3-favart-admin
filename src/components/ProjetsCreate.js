import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const ProjetsCreate = (props) => {
  return (
    <Create title="Ajoutez un projet" {...props}>
      <SimpleForm>
        <TextInput source="logo" />
        <TextInput source="titre" />
        <TextInput source="porteurs" />
        <TextInput multiline source="enjeux" />
        <TextInput multiline source="missions" />
        <TextInput multiline source="partenaires" />
        <TextInput multiline source="territoires" />
        <TextInput multiline source="outils" />
      </SimpleForm>
    </Create>
  );
};

export default ProjetsCreate;
