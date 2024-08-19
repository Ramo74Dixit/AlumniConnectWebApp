import Landing from "./landing";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Event from "./Events";
import Donate from "./Donate";
import Contact from "./Contact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/event" element={<Event />} />
          <Route path="/donate" element={< Donate/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
  );
}

export default App;
