import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

function CareerCard ({year, title, subtitle, description, linkRepo}) {

    const handleOnClick = () => {
        window.open(linkRepo, '_blank');
    }

    return (
        <div className="career-card flex flex-col w-full pl-5 text-xl my-5">
            <h1 className='text-sm lg:text-xl'>{title} <span className='ml-2'>{year}</span><span className='ml-2'>{linkRepo && <FontAwesomeIcon className="cursor-pointer" icon={faGithub} onClick={handleOnClick} />}</span></h1>
            <h2 className='text-sm lg:text-xl'>{subtitle}</h2>
            <p className='text-sm lg:text-xl'>{description}</p>
        </div>
    );
}

export default CareerCard;