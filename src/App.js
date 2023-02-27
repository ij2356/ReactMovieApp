import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./router/Home.js"
import Detail from "./router/Detail.js"
import Coin from "./coin.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/movie/:id" element={<Detail />} />
        {/* <Route path="/movie" element={<Coin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
