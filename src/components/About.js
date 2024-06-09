import Button from './Button';

function About() {

    const years_of_experience = "2+"
    const completed_projects = "02"
    const companies_worked = "01"

    const onButtonClick = () => {
        const pdfUrl = "CV-Hugo-Campos.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV-Hugo-Campos.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
    };

    return(
        <div id="about" className="container mx-auto flex items-center">
            <img src="/me.png" alt="Hugo Campos Castro" className="me-image scale-100 items-end"></img>
            <div className="w-1/2 ml-10 inline-flex flex-row flex items-center">
                <div className="w-2/3">
                    <h1 className="text-5xl my-5">About me.</h1>
                    <p className="text-xl text-justify">
                    I'm a person motivated to learn, I always keep myself on trial and studying to get better my knowledges in topics and technologies of interest. I have the ability to the communication and team working, also I have knowledge and experience in programming languages, getting easy the learning process of a new programming language.
                    </p>
                    <br></br>
                    <p className="text-xl text-justify">
                    Talking about me in a more personal way, I'm a person that loves the challenges and always tries to give the best of himself, I'm lacto-vegetarian. I like worry for the wellness of the persons around, also I like to teach, and be able to help who wanteds it.
                    </p>
                    <br></br>
                    <p className="text-xl text-justify">
                    My dream is in a future can contribute with my sand's grain to the wellness and future of the humanity. My personal likes are varied, but among their are: to program, the UI/UX design, to draw, to learn, the astronomy, the universe, science, physics, to travel, to listen music, socialize and to teach.
                    </p>
                    <div className="my-5 text-xl">
                        <Button onClick={onButtonClick}>Download CV</Button>
                    </div>
                </div>
                <div className="w-1/3 pl-5">
                    <div className="abt-tag flex justify-between flex-col pl-5 my-12">
                        <h2 className='text-2xl'>Years of experience</h2>
                        <h2 className='text-7xl'>{years_of_experience}</h2>
                    </div>
                    <div className="abt-tag flex justify-between flex-col pl-5 my-12">
                        <h2 className='text-2xl'>Completed projects</h2>
                        <h2 className='text-7xl'>{completed_projects}</h2>
                    </div>
                    <div className="abt-tag flex justify-between flex-col pl-5 my-12">
                        <h2 className='text-2xl'>Companies worked</h2>
                        <h2 className='text-7xl'>{companies_worked}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;