import React from "react";


const Employee = ({ employee }) => {
    return (
        <div className="employee-wrapper">
            {employee.map((em) => (
                <div key={em.name} className="employee-card">
                    <h3 className="employee-name">{em.name}</h3>
                    <p className="employee-detail">His age is {em.age}</p>
                    <p className="employee-detail">The average salary is ${em.salary} per month</p>
                    <p className="employee-detail">Position: {em.position}</p>
                    <p className="employee-detail">Degree: {em.degree}</p>
                </div>
            ))}
        </div>
    );
};

export default Employee;
