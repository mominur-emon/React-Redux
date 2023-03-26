import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Blogs from "./components/Blogs";
import Navigation from "./components/Navigation";
import Blogdetails from "./components/Blogdetails";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blogdetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
