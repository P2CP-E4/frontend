import React from "react";
import { Routes, Route } from 'react-router-dom';

import Acceuil from "./pages/Acceuil";
import Doctorant from "./pages/Doctorant";
import Statistique from "./pages/Statistique";
import Pv from "./pages/Pv";
import Aide from "./pages/Aide";
import NoPage from "./pages/NoPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/doctorant" element={<Doctorant />} />
        <Route path="/aide" element={<Aide />} />
        <Route path="/pv" element={<Pv />} />
        <Route path="/statistique" element={<Statistique />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
