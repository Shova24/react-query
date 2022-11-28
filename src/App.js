import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import RQ from "./Components/RQ";
import Heros from "./Components/Heros";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/" style={{ padding: "2rem" }}>
          Home
        </Link>
        <Link to="/hero" style={{ padding: "2rem" }}>
          Hero
        </Link>
        <Link to="/rq" style={{ padding: "2rem" }}>
          RQ
        </Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rq" element={<RQ />}></Route>
          <Route path="/hero" element={<Heros />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
