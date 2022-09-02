import Landing from "./pages/Landing";
import AddLaptop from "./pages/AddLaptop";
import Laptops from "./pages/Laptops";
import Laptop from "./pages/Laptop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const token = "73a5ed96f333f1719f624ca2b5df1856";
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
