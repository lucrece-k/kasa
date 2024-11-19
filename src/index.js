import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Apropos from "./pages/aPropos/aPropos";
import FicheLogement from "./pages/ficheLogement/ficheLogement";
import Erreur from "./pages/erreur/erreur";
import listeLogementData from "./listeLogement.json";
import Home from "./pages/Home/home";

function App() {
  const [listeLogement, setlisteLogement] = useState([]);

  useEffect(() => {
    setlisteLogement(listeLogementData);
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home listeLogement={listeLogement} />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route
            path="/ficheLogement/:id"
            element={<FicheLogement listeLogement={listeLogement} />}
          />
          <Route path="*" element={<Erreur />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
