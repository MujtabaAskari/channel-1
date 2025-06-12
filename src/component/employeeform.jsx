import React, { useState } from "react";



const Employee = ({ }) => {
    const [employee, setEmployee] = useState({


        employeeName: "",
        employeeSalary: "",
        employeePosition: "",
        employeeDegree: "",
        employeeAge: "",


    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee((prevValues) => ({ ...prevValues, [name]: value }));
    };


    const submit = (event) => {
        event.preventDefault();
        alert(`Name of the employee is ${employee.employeeName} . 
            The salary of the them are${employee.employeeSalary}
             The postion the employee is ${employee.employeePosition}.
              They have degree of ${employee.employeeDegree} from unversity 
               The age is ${employee.employeeAge} `)

    };
    return (
        <form onSubmit={submit} className="form-container">
            <h3>Employee Form</h3>

            <div className="form-group">
                <label htmlFor="employeeName">Name of the Employee:</label>
                <input
                    type="text"
                    id="employeeName"
                    name="employeeName"
                    value={employee.employeeName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="employeeSalary">Salary of the Employee:</label>
                <input
                    type="text"
                    id="employeeSalary"
                    name="employeeSalary"
                    value={employee.employeeSalary}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="employeePosition">Position of the Employee:</label>
                <input
                    type="text"
                    id="employeePosition"
                    name="employeePosition"
                    value={employee.employeePosition}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="employeeDegree">Degree of the Employee:</label>
                <input
                    type="text"
                    id="employeeDegree"
                    name="employeeDegree"
                    value={employee.employeeDegree}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="employeeAge">Age of the Employee:</label>
                <input
                    type="text"
                    id="employeeAge"
                    name="employeeAge"
                    value={employee.employeeAge}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>






        </form>)




}
export default Employee