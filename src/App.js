import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import ProjetsCreate from "./components/ProjetsCreate";
import ProjetsEdit from "./components/ProjetsEdit";
import ProjetsList from "./components/ProjetsList";
import LogosCreate from "./components/LogosCreate";
import LogosEdit from "./components/LogosEdit";
import LogosList from "./components/LogosList";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="projets"
        list={ProjetsList}
        edit={ProjetsEdit}
        create={ProjetsCreate}
      />
      <Resource
        name="logos"
        list={LogosList}
        edit={LogosEdit}
        create={LogosCreate}
      />
    </Admin>
  );
}

export default App;
