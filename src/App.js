import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import ProjetsCreate from "./components/ProjetsCreate";
import ProjetsEdit from "./components/ProjetsEdit";
import ProjetsList from "./components/ProjetsList";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="projets"
        list={ProjetsList}
        edit={ProjetsEdit}
        create={ProjetsCreate}
      />
    </Admin>
  );
}

export default App;
