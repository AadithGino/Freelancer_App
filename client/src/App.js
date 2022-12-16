import "./App.css";
import Login from "./Components/User/LoginPage/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/User/SignupPage/Signup";
import Home from "./Components/User/Home/Home";
import AdminLogin from "./Components/Admin/Login/AdminLogin";
import Adminhome from "./Components/Admin/Home/Adminhome";
import AdminSignup from './Components/Admin/Signup/Signup'
import Profile from "./Components/User/Profile/Profile";
import Project from "./Components/User/POST/Project";
import ProjectView from "./Components/Admin/ProjectView/ProjectView";
import ViewProject from "./Components/User/ViewProject/ViewProject";
import SingleProjectView from "./Components/User/SingleProjectView/SingleProjectView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />
        <Route exact path="/admin" element={<Adminhome  />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/project" element={<Project />} />
        <Route path="/admin/projects-view" element={<ProjectView />} />
        <Route path="/projects-view" element={<ViewProject />} />
        <Route path="/single-project-view" element={<SingleProjectView />} />
      </Routes>
    </div>
  );
}

export default App;
