import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Company from "./company";
import Product from "./product";
import Navbar from "./navbar";
import Employee from "./Employee";


function Contact() {
    return (
        <Router>
            <Routes>
                <Route path="/company" element={<Company />} />
                <Route path="/product" element={<Product />} />
                <Route path="/employee" element={<Employee />} />
            </Routes>
        </Router>
    );
}

export default Contact