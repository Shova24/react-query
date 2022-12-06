import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import RQ from "./Components/RQ";
import Heros from "./Components/Heros";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
