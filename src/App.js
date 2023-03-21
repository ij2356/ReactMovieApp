import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./router/Home.js"
import Detail from "./router/Detail.js"
import Coin from "./coin.js"
import Header from "./components/header.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <>
      <Header></Header>
      <div className="pd-con">
        <Router>
          <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
    
            <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
            {/* <Route path="/movie" element={<Coin />} /> */}
          </Routes>
        </Router>
      </div >
      <Footer></Footer>
    </>
  );
}

export default App;
