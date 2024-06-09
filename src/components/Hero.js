import Typed from "typed.js";
import { useEffect, useRef } from "react";

import Button from './Button'

function Hero() {

    const element = useRef(null);

    const onButtonClick = () => {
        const pdfUrl = "CV-Hugo-Campos.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV-Hugo-Campos.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
    };

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ["Computer Eng. Student.", "M.L Developer.", "Software Developer.", "Web Developer."],
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
        <div className="hero w-4/5 xl:w-2/5 pl-8">
            <div className="">
                <h2>Hi! I'm</h2>
                <h1>Hugo Campos</h1>
                <h2>And I'm a <span ref={element}></span></h2>
            </div>
            <div className="flex justify-end">
                <Button onClick={onButtonClick}>Download CV</Button>
            </div>
        </div>
    );
}

export default Hero;