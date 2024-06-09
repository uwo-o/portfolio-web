import { useState, useEffect } from "react";

function Navbar() {

    const [isHide, setIsHide] = useState(false);

    // change base ond scrollY
    useEffect(() => {

        const handeActive = (e) => {
            if (window.scrollY > 20) {

                if (e.clientY < 100) {
                    setIsHide(false);
                } else {
                    setIsHide(true);
                }
            }
            else {
                setIsHide(false);
            }
        }

        if (isHide) {
            document.querySelector("nav").classList.add("hide");
        } else {
            document.querySelector("nav").classList.remove("hide");
        }

        window.addEventListener("scroll", handeActive);
        window.addEventListener("mousemove", handeActive);

        return () => {
            window.removeEventListener("scroll", handeActive);
            window.removeEventListener("mousemove", handeActive);
        }
    });

    return (
        <nav className="z-10">
            <ul className="inline-flex flex-row fixed">
                <li className="p-3 xl:px-5 p-name">uwo.</li>
                <li className="flex items-center" ><a className="p-3 xl:px-7" href="#home">Home</a></li>
                <li className="flex items-center" ><a className="p-3 xl:px-7" href="#about">About</a></li>
                <li className="flex items-center" ><a className="p-3 xl:px-7" href="#skill">Skills</a></li>
                <li className="flex items-center" ><a className="p-3 xl:px-7" href="#career">Career</a></li>
                <li className="flex items-center" ><a className="p-3 xl:px-7" href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;