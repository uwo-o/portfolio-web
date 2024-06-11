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
        <div id="about" className="container mx-auto flex items-center flex-col xl:flex-row">
            <div className='1/2 lg:1/3 2xl:w-1/2'>
                <img src="./me.png" alt="Hugo Campos Castro" className="me-image items-end hidden xl:block scale-90 xl:scale-100"></img>
            </div>
            <div className="2xl:w-1/2 m-3 xl:m-5 2xl:ml-10 inline-flex flex-col xl:flex-row items-center">
                <div className="w-3/4 2xl:2/3">
                    <h1 className="text-5xl my-5">About me.</h1>
                    <p className="text-lg 2xl:text-xl text-justify">
                    I'm motivated to learn, I always keep myself on trial and studying to improve my knowledge of topics and technologies of interest. I can communicate and team working, and also I have knowledge and experience in programming languages, making the learning process of a new programming language easy.
                    </p>
                    <br></br>
                    <p className="text-lg 2xl:text-xl text-justify">
                    Talking about me in a more personal way, I'm a person who loves challenges and always tries to give the best of himself, I'm lacto-vegetarian. I like to worry about the wellness of the people around me, also I like to teach and be able to help those who want it.
                    </p>
                    <br></br>
                    <p className="text-lg 2xl:text-xl text-justify">
                    My dream is in the future can contribute with my sand's grain to the wellness and future of humanity. My likes are varied, but among them are: programming, UI/UX design, drawing, learning, astronomy, the universe, science, physics, traveling, listening to music, socializing, and teaching.
                    </p>
                    <div className="my-5 text-xl">
                        <Button onClick={onButtonClick}>Download CV</Button>
                    </div>
                </div>
                <div className="flex flex-row xl:flex-col lg:4/5 xl:w-1/4 2xl:w-1/3 pl-5">
                    <div className="abt-tag flex justify-between flex-col pl-5 my-5 mr-2 lg:mx-5 2xl:my-12:mx-0">
                        <h2 className='text-ml ml:text-lg lg:text-xl 2xl:text-2xl'>Years of experience</h2>
                        <h2 className='text-xl ml:text-3xl lg:text-5xl 2xl:text-7xl'>{years_of_experience}</h2>
                    </div>
                    <div className="abt-tag flex justify-between flex-col pl-5 my-5 mx-2 lg:mx-5 2xl:my-12:mx-0">
                        <h2 className='text-ml ml:text-lg lg:text-xl 2xl:text-2xl'>Completed projects</h2>
                        <h2 className='text-xl ml:text-3xl lg:text-5xl 2xl:text-7xl'>{completed_projects}</h2>
                    </div>
                    <div className="abt-tag flex justify-between flex-col pl-5 my-5 mx-2 lg:mx-5 2xl:my-12:mx-0">
                        <h2 className='text-ml ml:text-lg lg:text-xl 2xl:text-2xl'>Companies worked</h2>
                        <h2 className='text-xl ml:text-3xl lg:text-5xl 2xl:text-7xl'>{companies_worked}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;