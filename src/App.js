import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./component/Nav";
import { Course, Main } from "./Pages";
import Activity from "./Pages/Activity/Activity";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/course" element={<Course />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
