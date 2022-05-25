import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <>
     <Router>
       <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
        </Routes>
     </Router>
     
    </>
  );
}

export default App;
