import Typed from "typed.js";
import { useEffect, useRef } from "react";

import Button from './Button'

function Hero() {

    const element = useRef(null);

    const handleButtonClick = () => {
        window.open("https://www.linkedin.com/in/uwo-o", "_blank");
    }

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ["Computer Science Student.", "M.L Developer.", "Software Developer.", "Web Developer."],
            typeSpeed: 30,
            backSpeed: 30,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    }, []);

    return (
        <div className="hero w-4/5 2xl:w-2/5 pl-8">
            <div className="">
                <h2>Hi! I'm</h2>
                <h1>Hugo Campos</h1>
                <h2>And I'm a <span ref={element}></span></h2>
            </div>
            <div className="flex justify-end">
                <Button onClick={handleButtonClick}>Hire me</Button>
            </div>
        </div>
    );
}

export default Hero;