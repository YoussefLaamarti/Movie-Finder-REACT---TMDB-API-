import "./App.css";
import Home from "./components/pages/Home/Home";
import OneResult from "./components/pages/OneResult/OneResult";
import "./css/Home.css";
import "./css/Oneresult.css";
import "./css/Moviefilter.css";
import "./css/FilterResults.css";

import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export const TestContext = React.createContext();
function App() {
  const [OneMovie, setOneMovie] = useState([]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home setOneMovie={setOneMovie} />} />
          <Route path="/movie" element={<OneResult OneMovie={OneMovie} />} />
          <Route path="/categorie" element={<OneResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
