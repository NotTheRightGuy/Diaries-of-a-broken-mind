import React from "react";
import { useEffect, useState } from "react";

function Header() {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const classAdder = (e) => {
            if (window.scrollY > 100) {
                setShrink(true);
            }
        };

        const classRemover = (e) => {
            if (window.scrollY < 100) {
                setShrink(false);
            }
        };

        if (!shrink) {
            window.addEventListener("scroll", classAdder);
        }
        if (shrink) {
            window.addEventListener("scroll", classRemover);
        }
        return () => {
            window.removeEventListener("scroll", classAdder);
            window.removeEventListener("scroll", classRemover);
        };
    });

    return (
        <header className={shrink ? "header shrink" : "header"}>
            <div className="name">Diaries of a Broken Mind</div>
            <blockquote className="quote">
                "The Way I see it, if you want the rainbow, you gotta put up
                with the rain"
            </blockquote>
        </header>
    );
}

export default Header;
