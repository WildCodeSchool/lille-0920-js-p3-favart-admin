import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const LogosCreate = (props) => {
  return (
    <Create title="Ajoutez un logo" {...props}>
      <SimpleForm>
        <TextInput source="titre" />

        <TextInput source="lien_url" />
      </SimpleForm>
    </Create>
  );
};

export default LogosCreate;
