import { useState, useEffect, useRef } from "react";

function ViewBox({ title, body }) {
    const [clicked, setClicked] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const handleClick = (event) => {
            setClicked(true);
        };
        const element = ref.current;
        element.addEventListener("click", handleClick);
        return () => {
            element.removeEventListener("click", handleClick);
        };
    }, []);

    const handleClosing = () => {
        setClicked(false);
    };

    const pageClassName = `${!clicked ? "page" : "page clicked"}`;

    return (
        <div className={pageClassName} ref={ref}>
            <div className="title">{title}</div>
            <div className="body">{body}</div>
            <button className="close-btn" onClick={handleClosing}></button>
        </div>
    );
}

export default ViewBox;
