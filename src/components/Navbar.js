import { useState, useEffect } from "react";

function Navbar() {

    const [isHide, setIsHide] = useState(false);

    // change base ond scrollY
    useEffect(() => {

        const handeActive = (e) => {
            if (window.innerWidth > 768) {
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
        <nav className="z-20">
            <ul className="inline-flex flex-row fixed items-center">
                <li className="p-3 xl:px-5 p-name">uwo.</li>
                <li className="flex items-center" ><a className="flex items-center p-3 px-10" href="#home">Home</a></li>
                <li className="flex items-center" ><a className="flex items-center p-3 px-10" href="#about">About</a></li>
                <li className="flex items-center" ><a className="flex items-center p-3 px-10" href="#career">Career</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;