import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./component/Nav";
import { Course, Main } from "./Pages";
import Activities from "./Pages/Activities/Activities";
import Activity from "./Pages/Activity/Activity";
import Dashboard from "./Pages/Dashboard/Dashboard";

// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    // <Provider store={store}>
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
    // </Provider>
  );
}

export default App;
