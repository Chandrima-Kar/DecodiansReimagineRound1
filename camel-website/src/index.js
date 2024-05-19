import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/paints" element={<App />} />
        <Route path="/drawing-materials" element={<App />} />
        <Route path="/mediums" element={<App />} />
        <Route path="/canvases" element={<App />} />
        <Route path="/brushes" element={<App />} />
        <Route path="/painting-kits" element={<App />} />
        <Route path="/hobby" element={<App />} />
        <Route path="/kids" element={<App />} />
        <Route path="/techniques" element={<App />} />
        <Route path="/artist-gallery" element={<App />} />
        <Route path="/art-workshops" element={<App />} />
        <Route path="/art-contests" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
