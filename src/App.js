import Landing from "./pages/Landing/Landing";
import AddLaptop from "./pages/AddLaptop/AddLaptop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/addLaptop" element={<AddLaptop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
