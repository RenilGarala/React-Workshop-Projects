import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CarDetail from "./Components/CarDetail";
import Navbar from "./Components/Navbar";
import Food from "./Components/Finance";
import Electric from "./Components/Electric";
import ZomatoData from "./Components/ZomatoData";
import User from "./Components/User";
import FinanceDetail from "./Components/FinanceDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CarDetail/>}/>
          <Route path="/finance" element={<Food/>}/>
          <Route path="/electric" element={<Electric/>}/>
          <Route path="/zomato" element={<ZomatoData/>}/> 
          <Route path="/user" element={<User/>}/>
          <Route path="/financeDetail/:id" element={<FinanceDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
