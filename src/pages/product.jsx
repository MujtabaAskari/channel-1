import React from "react";


const Product = ({ product }) => {
    return (
        <div>
            {product.map((pro) => (
                <div key={pro.name} className="product-card">
                    <h3 className="product-title">{pro.name}</h3>
                    <p className="product-detail">Model: {pro.model}</p>
                    <p className="product-detail">Brand: {pro.brand}</p>
                    <p className="product-detail">Price: ${pro.price}</p>
                    <p className="product-detail">Rating: {pro.rating}</p>
                </div>
            ))}
        </div>
    );
};

export default Product;