import Typed from "typed.js";
import { useEffect, useRef } from "react";

import Button from './Button'

function Hero() {

    const element = useRef(null);

    const onButtonClick = () => {
        fetch("/public/CV-Hugo-Campos.pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "CV-Hugo-Campos.pdf";
                alink.click();
            });
        });
    };

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ["Computer Engineering Student.", "Machine Learning Developer.", "Software Developer.", "Web Developer."],
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
        <div className="hero p-5 w-2/5 pl-8">
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