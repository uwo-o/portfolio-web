import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Hero() {

    const element = useRef(null);

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ["Computer Science Student.", "Machine Learning Developer.", "Software Developer.", "Web Developer."],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    }, []);

    return (
        <div className="hero p-10">
            <h2>Hi! I'm</h2>
            <h1>Hugo Campos</h1>
            <h2>
                And I'm a <span ref={element}></span>
            </h2>
        </div>
    );
}

export default Hero;