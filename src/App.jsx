import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";

function Loader() {
  return (
    <div className="bg-black vh-100 d-flex justify-content-center align-items-center">
      <div className="container-loader bg-light">
        <div className="text-center container-loader-2  d-flex justify-content-center align-items-center">
          <img
            src="/img/logo/blackstuffrecords-logo.png"
            alt="Black Stuff Records"
            className="img-fluid loader-img"
          />

          <div class="loader-text mt-5"></div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un caricamento ritardato (puoi sostituire questo con il tuo reale caricamento dei dati)
    const timeout = setTimeout(() => {
      setLoading(false);
      AOS.init();
    }, 4000); // Modifica il tempo di caricamento se necessario

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
