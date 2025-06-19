import React, { useState } from "react";



const Company = ({ }) => {
    const [company, setcompany] = useState({
        companyName: "",
        companyCeo: "",
        companyLocation: "",
        companyType: "",
        companyFounder: ""

    });


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setcompany(values => ({ ...values, [name]: value }))

    }
    const Submit = (event) => {
        event.preventDefault();
        alert(`Comapnay name is ${company.companyName}.
             it is directed by th ${company.companyCeo} 
            . the main branch of the company is in ${company.companyLocation} . 
            It is is kind of ${company.comapnyType}.
             The first one one who start the company was${company.companyFounder} . `);

    }
    return (

        <form onSubmit={Submit} className="form-container">
            <h3> Form of company</h3>
            <div className="form-group">
                <label htmlFor="companyName"> Company Name </label>
                <input
                    value={company?.companyName || ""}
                    type="text"
                    id="companyName"
                    name="companyName"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="companyCeo"> Company CEO</label>
                <input
                    value={company?.companyCeo || ""}
                    type="text"
                    id="companyCeo"
                    name="companyCeo"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="companyLocation"> Location of the company</label>
                <input
                    value={company?.companyLocation || ""}
                    type="text"
                    id="companyLocation"
                    name="companyLocation"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="companyType"> Type of company</label>
                <input value={company?.companyType || ""}
                    type="text"
                    id="companyType"
                    name="companyType"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="companyFounder"> Founder of company</label>
                <input value={company?.companyFounder || ""}
                    type="text"
                    id="companyFounder"
                    name="companyFounder"
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>



        </form>
    )







}
export default Company