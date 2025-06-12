import React from "react";


const Product = ({ name, model, color, brand, price, rating }) => {
    return (<>


        <h1> This prodcut name is :<b> {name}</b> </h1>
        <h2> The model of product :<b>{model}</b></h2>
        <h3>  It has color of<b>{color}</b></h3>
        <h3>It is brand of <b>{brand}</b> </h3>
        <h4> The price is :<b>{price}</b></h4>
        <h2> The overall rating is :<b>{rating}</b></h2>

    </>

    )

}
export default Product