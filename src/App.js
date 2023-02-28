import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./router/Home.js"
import Detail from "./router/Detail.js"
import Coin from "./coin.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />

        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
        {/* <Route path="/movie" element={<Coin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
