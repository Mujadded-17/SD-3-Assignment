import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Article from "./components/pages/Article";
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [showNav, setShowNav]=useState(false);
  return (
    <>
    <Router>
    
      <header>
        <GiHamburgerMenu onClick={()=> setShowNav(!showNav)}/>
      </header>
      <Navbar show={showNav}/>

      <div className="App">
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Article' element={<Article/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
