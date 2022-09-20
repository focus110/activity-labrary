import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./component/layout/Nav";
import { Main } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
