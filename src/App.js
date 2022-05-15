import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Comics from "./pages/Comics";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Characters from "./pages/Characters";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <header className="App-header"></header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<Character />} />
        {/* <Route path="/characters/:characterId" element={<CharacterFile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
