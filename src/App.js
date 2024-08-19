import Landing from "./landing";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Event from "./Events";
import Donate from "./Donate";
import Contact from "./Contact";
import Navbar from "./components/Navbar";
import AlumniRegister from "./components/Registeration/AlumniRegister";
import StudentRegister from "./components/Registeration/StudentRegister";
import CollegeRegister from "./components/Registeration/CollegeRegister";
import JobPortal from "./components/job-portal/JobPortal";
function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/event" element={<Event />} />
          <Route path="/donate" element={< Donate/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/register-alumni" element={<AlumniRegister/>} />
          <Route path="/register-student" element={<StudentRegister/>} />
          <Route path="/register-college" element={<CollegeRegister/>} />
          <Route path="/job-portal" element={<JobPortal/>} />
        </Routes>
      </Router>
  );
}

export default App;
