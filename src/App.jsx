
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/events" element={<Event/>}/>
        <Route path="/articles" element={<Article/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
