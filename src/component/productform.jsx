import React, { useState } from "react";
import './employee.css'

const Product = () => {
    const [product, setProduct] = useState({
        productName: "",
        productBrand: "",
        productModel: "",
        productPrice: "",
        productRating: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const submit = (event) => {
        event.preventDefault();
        alert(`The product name is ${product.productName}.
               The brand of the product is ${product.productBrand}.
               The model of the product is ${product.productModel}.
               The price of the product is ${product.productPrice}.
               The overall rating is ${product.productRating}.`);
    };

    return (
        <form onSubmit={submit} className="form-container">
            <h3>Product Form</h3>

            <div className="form-group">
                <label htmlFor="productName">Name of the product:</label>
                <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={product.productName}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="productBrand">Brand of the product:</label>
                <input
                    type="text"
                    id="productBrand"
                    name="productBrand"
                    value={product.productBrand}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="productModel">Model of the product:</label>
                <input
                    type="text"
                    id="productModel"
                    name="productModel"
                    value={product.productModel}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="productPrice">Price of the product:</label>
                <input
                    type="text"
                    id="productPrice"
                    name="productPrice"
                    value={product.productPrice}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="productRating">Rating:</label>
                <input
                    type="text"
                    id="productRating"
                    name="productRating"
                    value={product.productRating}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Product;
