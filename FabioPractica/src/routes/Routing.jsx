import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from '../pages/Register'
import Home from '../pages/Home'
import Login from '../pages/Login';


const Routing = () => {
  return (
    <Router>
     <Routes>

       <Route path="/" element={<Login/>}/>

       <Route path="/Register" element={<Register/>}/>

       <Route path='/Home' element={<Home/>}/>
     </Routes>
    </Router>
   );
};
export default Routing;