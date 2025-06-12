import React from "react";




const Employee = ({ name, salary, postion, degree, age, experience }) => {
    return (<>
        <h1>The name of employee is:<b>{name} </b> </h1>
        <h2> The salary of the are:<b>{salary}per month</b></h2>
        <h3>He works as :<b>{postion} in the company</b></h3>
        <h3> He have degree of :<b>{degree} from university</b></h3>
        <h2> He is <b>{age} years old</b></h2>
        <h3> have :<b>{experience} years of experience</b></h3>







    </>)
}

export default Employee