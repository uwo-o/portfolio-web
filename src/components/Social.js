import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Social() {
    return (
        <div id="social "className="social z-10">
            <a className="p-2 px-4" href="https://www.linkedin.com/in/uwo-o" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="p-2 px-4" href="https://www.github.com/uwo-o" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="p-2 px-4" href="https://www.instagram.com/_h.go__" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
    )
}

export default Social;