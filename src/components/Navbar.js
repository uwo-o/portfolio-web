function Navbar() {
    return (
        <nav>
            <ul className="inline-flex flex-row fixed">
                <li className="p-3 xl:px-5 p-name">uwo.</li>
                <li className="p-3 xl:px-7"><a href="#home">Home</a></li>
                <li className="p-3 xl:px-7"><a href="#about">About</a></li>
                <li className="p-3 xl:px-7"><a href="#skill">Skills</a></li>
                <li className="p-3 xl:px-7"><a href="#career">Career</a></li>
                <li className="p-3 xl:px-7"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;