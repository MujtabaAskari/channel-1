const Plus = ({ plus }) => {
    console.log("child render");
    return (
        <>
            <h2>My Plus</h2>
            {plus.map((plus, index) => {
                return <p key={index}>{plus}</p>;
            })}
        </>
    );
};

export default Plus;