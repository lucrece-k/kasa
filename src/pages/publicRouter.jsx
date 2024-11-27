import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "./layout";
import Apropos from "./aPropos/aPropos";
import FicheLogement from "./ficheLogement/ficheLogement";
import Erreur from "./erreur/erreur";
import Home from "./Home/home";
import listeLogementData from "../listeLogement.json";

function PublicRouter() {
  const [listeLogement, setlisteLogement] = useState([]);

  useEffect(() => {
    setlisteLogement(listeLogementData);
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home listeLogement={listeLogement} />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route
          path="/ficheLogement/:id"
          element={
            <FicheLogement
              listeLogement={listeLogement}
              showArrow={true}
              showNumber={true}
            />
          }
        />
        <Route path="*" element={<Erreur />} />
      </Route>
    </Routes>
  );
}
export default PublicRouter;
