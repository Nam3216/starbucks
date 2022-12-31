import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Components/Pages/Home"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Pages/Menu';
//import ItemDetail from './Components/Menu/ItemDetail';
import Detail from './Components/Pages/Detail';
//import Context from './Context/Context';
import Checkout from './Components/Pages/Checkout';
import Footer from './Components/Pages/Footer';
import Locations from './Components/Pages/Location';
import Buy from './Components/Pages/Buy';
/*<div className="App">
      <Context>*/
function App() {

  useEffect(()=>{
    document.title="Starbucks"
  },[])

  return (
    <div className="App">
    
      <div className="content">
        <BrowserRouter>
          <header>
            <Navbar/>
            
          </header>
          <Routes>
            <Route path="/starbucks/" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/locations" element={<Locations/>}/>
            <Route path="/buy" element={<Buy/>}/>
          </Routes>

          <footer>

            <Footer/>
          </footer>
        </BrowserRouter>
      </div>
     
    </div>
  );
}

export default App;
