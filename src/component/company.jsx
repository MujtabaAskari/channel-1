
import React from "react";

const Comapny = ({ name, ceo, founder, type, location, product, establishment }) => {
    return (
        <>
            <h1> Company name is:<b>{name}</b></h1>
            <h3>The ceo of the  is:<b>{ceo}</b><b></b></h3>
            <h2>The founder of the company is:<b>{founder}</b> </h2>
            <h2> It's a kind of : <b>{type}</b> company</h2>
            <h2>The head quarter of the comapny is :<b>{location}</b> </h2>
            <h2>Products of the company are:<b>{product}</b></h2>
            <h3> It was founded for th  first time in :<b>{establishment}</b></h3>



        </>
    )

}
export default Comapny;