import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./components/layouts/Container";

import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <Router>
      <Navbar/>

      <Container customClass="minHeight">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Company" element={<Company/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/NewProject" element={<NewProject/>}/> 
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
