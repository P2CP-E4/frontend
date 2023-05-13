import React from "react";
import { Routes, Route } from 'react-router-dom';
import Acceuil from "./pages/Acceuil";
import Doctorant from "./pages/Doctorant";
import StatistiquePredefinie from "./pages/StatistiquePredefinie";
import Pv from "./pages/Pv";
import Aide from "./pages/Aide";
import NoPage from "./pages/NoPage";
import WelcomePage from "./pages/WelcomePage";
import Inscription from "./pages/Inscription";
import ModificationStatus from "./pages/ModificationStatus";
import Reinscription from "./pages/Reinscription";
import Importer from "./pages/Importer";
import Exporter from "./pages/Exporter";
import ModificationThese from "./pages/ModificationThese";
import ModificationPersonalInfo from "./pages/ModificationPersonalInfo";
import AjoutFCT from "./pages/AjoutFCT";
import AjoutObservation from "./pages/AjoutObservation";
import AjoutSiminaire from "./pages/AjoutSiminaire";
import ReinscriptionDiffere from "./pages/ReinscriptionDiffere";
import StatistiquePersonnalisee from "./pages/StatistiquePersonalisee";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/acceuil" element={<Acceuil />} />
        <Route path="/doctorant" element={<Doctorant />} />
        <Route path="/aide" element={<Aide />} />
        <Route path="/pv" element={<Pv />} />
        <Route path="/statistiquePredefinie" element={<StatistiquePredefinie />} />
        <Route path="/statistiquePersonnalisee" element={<StatistiquePersonnalisee />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/modificationStatus" element={<ModificationStatus />} />
        <Route path="/reinscription" element={<Reinscription />} />
        <Route path="/reinscriptionDiffere" element={<ReinscriptionDiffere />} />
        <Route path="/importer" element={<Importer />} />
        <Route path="/exporter" element={<Exporter />} />
        <Route path="/changementThese" element={<ModificationThese />} />
        <Route path="/modificationPersonnelInformations" element={<ModificationPersonalInfo />} />
        <Route path="/ajoutFCT" element={<AjoutFCT />} />
        <Route path="/ajoutObservation" element={<AjoutObservation />} />
        <Route path="/ajoutSeminaire" element={<AjoutSiminaire />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
