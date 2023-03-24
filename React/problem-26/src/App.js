import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Error from "./components/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
