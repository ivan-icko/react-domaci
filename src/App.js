import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/home" element={<Home/>}/> 
          <Route path="/menu" element={<Menu/>}/> 
          <Route path="/contact" element={<Contact/>}/> 
        </Routes>
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
