import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <>
     <Router>
       <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
     </Router>
     
    </>
  );
}

export default App;
