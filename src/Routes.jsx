import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Learning from './Pages/Learning';
import Products from './Pages/Products';
import News from './Pages/News';
import About from './Pages/About';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/products" element={<Products />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default AppRoutes;
