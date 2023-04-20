import React from "react";
import { Routes, Route } from 'react-router-dom';
import Acceuil from "./pages/Acceuil";
import Doctorant from "./pages/Doctorant";
import Statistique from "./pages/Statistique";
import Pv from "./pages/Pv";
import Aide from "./pages/Aide";
import NoPage from "./pages/NoPage";
import WelcomePage from "./pages/WelcomePage";
import Inscription from "./pages/Inscription";
import ModificationStatus from "./pages/ModificationStatus";
import Reinscription from "./pages/Reinscription";
import Importer from "./pages/Importer";
import Exporter from "./pages/Exporter";
import Profile from "./pages/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/doctorant" element={<Doctorant />} />
        <Route path="/aide" element={<Aide />} />
        <Route path="/pv" element={<Pv />} />
        <Route path="/statistique" element={<Statistique />} />
        <Route path="/welcomepage" element={<WelcomePage />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/modificationstatus" element={<ModificationStatus />} />
        <Route path="/reinscription" element={<Reinscription />} />
        <Route path="/importer" element={<Importer />} />
        <Route path="/exporter" element={<Exporter />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
