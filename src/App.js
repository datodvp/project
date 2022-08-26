import Landing from "./pages/Landing";
import AddLaptop from "./pages/AddLaptop";
import Laptops from "./pages/Laptops";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/addLaptop" element={<AddLaptop />} />
          <Route path="/Laptops" element={<Laptops />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
