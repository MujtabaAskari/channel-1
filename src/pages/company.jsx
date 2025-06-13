import React from "react";


const Company = ({ company }) => {
    return (
        <div className="company-wrapper">
            {company.map((com) => (
                <div key={com.name} className="company-card">
                    <h3>Name of company: {com.name}</h3>
                    <p><b>CEO:</b> {com.ceo}</p>
                    <p><b>Founder:</b> {com.founder}</p>
                    <p><b>Headquarters:</b> {com.location}</p>
                    <p><b>Type:</b> {com.type} company</p>
                </div>
            ))}
        </div>
    );
};

export default Company;
