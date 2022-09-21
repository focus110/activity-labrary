import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./component/Nav";
import { Course, Main } from "./Pages";
import Activities from "./Pages/Activities/Activities";
import Activity from "./Pages/Activity/Activity";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/course" element={<Course />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
