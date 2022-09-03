import Landing from "./pages/Landing";
import AddLaptop from "./pages/AddLaptop";
import Laptops from "./pages/Laptops";
import Laptop from "./pages/Laptop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const token = "f0a1cd96b35955d7612d84ac07a6767b";
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/addLaptop" element={<AddLaptop token={token} />} />
          <Route path="/Laptops" element={<Laptops token={token} />} />
          <Route path="/Laptop/:id" element={<Laptop token={token} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
