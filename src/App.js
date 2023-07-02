import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Qaza from "./Qaza";
import Home from "./Home";
import QazaRecord from "./QazaRecord";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Qaza" element={<Qaza />}></Route>
          <Route path="/QazaRecord" element={<QazaRecord />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
