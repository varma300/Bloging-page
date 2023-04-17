import { useState } from "react";
// import './App.css'
import Page1 from "./blog-page/Page1";
import Page2 from "./blog-page/Page2";
import Context from "./context/CreateContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [getValue, setGetValue] = useState();

  const trans = {
    value: getValue,
    setValue: setGetValue,
  };

  return (
    <BrowserRouter>
    <Context.Provider value={trans}>
    <Routes>
    <Route path="/" element={<Page1 />} />
    <Route path="page2" element={<Page2 />} />
    </Routes>
    </Context.Provider>
          </BrowserRouter>
  );
}

export default App;
