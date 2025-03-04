import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="Content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
