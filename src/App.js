import Landing from "./pages/Landing";
import AddLaptop from "./pages/AddLaptop";
import Laptops from "./pages/Laptops";
import Laptop from "./pages/Laptop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const token = "6cd88074ef568dd8ca75490f67b351c7";
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/addLaptop" element={<AddLaptop token={token} />} />
          <Route path="/Laptops" element={<Laptops token={token} />} />
          <Route path="/Laptop/:id" element={<Laptop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
