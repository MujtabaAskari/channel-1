import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import Employee from './pages/Employee';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Company from './pages/company';
import Product from './pages/product';
import "./pages/style.css"





const root = ReactDOM.createRoot(document.getElementById('root'));
let employees = [
    {
        name: "Mr Ali",
        age: 34,
        salary: 50000,
        positoin: "manager",
        degree: "master",
    },
    {
        name: "Mrs Mohammad",
        age: 28,
        salary: 25000,
        positoin: "supervisor",
        degree: "master",
    },
    {
        name: "Mr Hussain ",
        age: 28,
        salary: 15000,
        positoin: "senior",
        degree: "bachlar",
    },
    {
        name: "Mr Baqir",
        age: 32,
        salary: 18000,
        positoin: "Senior",
        degree: "bachlar",
    },
    {
        name: "Ms Zahra  ",
        age: 29,
        salary: 12000,
        positoin: "sectary",
        degree: "bachlar",
    }
]


let products = [
    {
        name: "Iphone",
        model: "x max",
        brand: "apple",
        price: 1200,
        rating: 4.8,
    },
    {
        name: "Mac book",
        model: "M4 max",
        brand: "apple",
        price: 4000,
        rating: 4.5,
    },
    {
        name: "Air pot",
        model: "air pot pro",
        brand: "apple",
        price: 250,
        rating: 4.4,
    },
    {
        name: "S ulra",
        model: "25",
        brand: "samsung",
        price: 1200,
        rating: 4.8,
    },
    {
        name: "Rtx",
        model: "5090",
        brand: "Nvidia",
        price: 2500,
        rating: 4.8,
    }
]

let companies = [
    {
        name: "Apple",
        ceo: "Tim cook",
        founder: "Steve jobs",
        location: "California,USA",
        type: "Tech company",
    },
    {
        name: "Microsoft",
        ceo: "Steve berg",
        founder: "bill Gates",
        location: "California,USA",
        type: "Tech company",
    },
    {
        name: "Nivdia",
        ceo: "jin hownag",
        founder: "jin howang",
        location: "California,USA",
        type: "Tech and hardware company",
    },
    {
        name: "Tesla",
        ceo: "Elon musk",
        founder: "Elon Musk",
        location: "Texaz,USA",
        type: "Car and data company",
    },
    {
        name: "Amazon",
        ceo: "Jeff Bezoz",
        founder: "Jeff Bezoz",
        location: "Californai,USA",
        type: "Online shoping",
    },

]


root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='employee' element={<Employee employee={employees} />} />
                <Route path='product' element={<Product product={products} />} />
                <Route path='company' element={<Company company={companies} />} />
            </Route>
        </Routes>
    </BrowserRouter>



);