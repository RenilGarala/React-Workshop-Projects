import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import About from "./Components/About";
import SecondLayout from "./Components/SecondLayout";
import ThirdLayout from "./Components/ThirdLayout";
import FourthLayout from "./Components/layoutFour/FourthLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FourthLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
