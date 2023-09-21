import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import "./App.css"
import WorldWide from "./pages/worldWide/WorldWide";
import Turkey from "./pages/turkey/Turkey";
import SingleCity from "./components/cities/singleCity";
import Home from "./pages/home/Home";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/world-wide" element={<WorldWide />} />
          <Route path="/turkey" element={<Turkey />}/>
          <Route path="/turkey/:id"  element={<SingleCity/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
