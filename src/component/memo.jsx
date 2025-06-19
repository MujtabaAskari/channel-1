import { useState } from "react";
import ReactDOM from "react-dom/client";
import Plus from "./plus";





const Count = () => {
    const [count, setCount] = useState(0);
    const [plus, setplus] = useState(["plus 1", "plus 2", "plus 3", "plus4"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
            <Plus plus={plus} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default Count