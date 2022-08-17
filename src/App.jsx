import "./App.css";
import Home from "./components/pages/Home/Home";
import OneResult from "./components/pages/OneResult/OneResult";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        toastStyle={{ backgroundColor: "black", color: "white" }}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
