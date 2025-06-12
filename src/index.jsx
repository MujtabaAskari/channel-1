import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import Employee from './pages/Employee';
import Home from './pages/Home';
import Layout from './pages/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='employee' element={<Employee />} />
            </Route>
        </Routes>
    </BrowserRouter>



);