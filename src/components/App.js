import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../router/Home.jsx"
import Detail from "../router/Detail.jsx"
import Coin from "../coin.jsx"
import Header from "./header.jsx";
import Footer from "./footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <div className="pd-con" id="content">
          
          <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}  />
    
            <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
            {/* <Route path="/movie" element={<Coin />} /> */}
          </Routes>
          
        </div >
        </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
