import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
// import { useState } from "react";
import Comics from "./pages/Comics";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Characters from "./pages/Characters";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
    } else {
      Cookies.remove("userToken");
    }
  };
  return (
    <Router>
      <Header handleToken={handleToken} />
      <div className="App">
        <header className="App-header"></header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<Character />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        {/* <Route path="/characters/:characterId" element={<CharacterFile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
