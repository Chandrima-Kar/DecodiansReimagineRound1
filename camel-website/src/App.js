import React from "react";
// components

import Nav from "./components/Nav";
import Banner from "./components/Banner";

import "./App.css";

// #153448
// #3C5B6F
// #948979
// #DFD0B8

function App() {
  return (
    <div className="bg-no-repeat bg-cover overflow-hidden">
      <Nav />
      {/* <Header /> */}
      <Banner />
      <Banner />
    </div>
  );
}

export default App;
