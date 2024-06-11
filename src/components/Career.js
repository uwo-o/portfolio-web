import ButtonCareer from './ButtonCareer';
import CareerCard from './CareerCard';

import {useState} from 'react';

function Career () {

    const [showProjects, setShowProjects] = useState(false);
    const [showExperience, setShowExperience] = useState(true);
    const [showEducation, setShowEducation] = useState(false);

    const changeActive = (e) => {
        const buttons = document.querySelectorAll('.button-career');
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        e.target.classList.add('active');

        var id = e.target.id.split('-')[1];

        if (id === 'projects') {
            setShowProjects(true);
            setShowExperience(false);
            setShowEducation(false);
        }

        if (id === 'experience') {
            setShowProjects(false);
            setShowExperience(true);
            setShowEducation(false);
        }

        if (id === 'education') {
            setShowProjects(false);
            setShowExperience(false);
            setShowEducation(true);
        }
    }

    return(
        <div id="career" className="w-4/5 lg:w-1/2 container mx-auto flex items-center flex-col my-20 ">
            <h2 className="career-h2 text-xl 2xl:text-3xl">Are you interested in me?</h2>
            <h1 className="career-h1 text-2xl lg:text-4xl 2xl:text-6xl">Here is my career resume</h1>
            <hr className='w-full mt-10'/>
            <div className="flex flex-row mt-10">
                <ButtonCareer id="btn-projects" onClick={changeActive} className="button-career text-md mx-2 px-3 lg:text-2xl lg:mx-5 lg:px-5 py-2">Projects</ButtonCareer>
                <ButtonCareer id="btn-experience" onClick={changeActive} className="button-career text-md mx-2 px-3 lg:text-2xl lg:mx-5 lg:px-5 py-2 active">Experience</ButtonCareer>
                <ButtonCareer id="btn-education" onClick={changeActive} className="button-career text-md mx-2 px-3 lg:text-2xl lg:mx-5 lg:px-5 py-2">Education</ButtonCareer>
            </div>

            {showProjects &&
                <div id="projects" className='flex flex-col mt-10 animate-fade-right'>
                    <CareerCard year='2024' title='Portfolio web' subtitle='React, React-Three-Fiber & Tailwind' description='Portfolio web made using React and Tailwind, and React-Three-Fiber for the home animation' linkRepo='https://github.com/uwo-o/portfolio-web'/>
                    <CareerCard year='2023' title='Landing page' subtitle='Vanilla HTML, CSS, JS' description='Landing page for a store' linkRepo='https://github.com/uwo-o/Project-Cale'/>
                </div>
            }

            {showExperience &&
                <div id="experience" className='flex flex-col mt-10 animate-fade-right'>
                    <CareerCard year='Mar. 2024 - Today' title='Developer assistant - AC3E' subtitle='ASTRI Project' description='After my internship I was hired as developer assistant for my excellent work in the project.' linkRepo=''/>
                    <CareerCard year='Jan. 2024 - Feb. 2024' title='Internship - AC3E' subtitle='ASTRI Project' description='I was responsible to help to develop and test ACS Components for the project.' linkRepo=''/>
                    <CareerCard year='Ago. 2023 - Jul. 2024' title='Laboratory assistant - USM' subtitle='Computing laboratory' description='I was responsible to administrate systems ands services offered by computing laboratory.' linkRepo=''/>
                    <CareerCard year='Ago. 2023 - Nov. 2023' title='Software developer - Octa AeroSpace' subtitle='Octa-Sat Project' description='I was responsible to develop software solutions for a can sat launched on an helium balloon.' linkRepo=''/>
                    <CareerCard year='Mar. 2023 - Jul. 2023' title='Teacher assistant evaluator - USM' subtitle='Programming languages course' description='I was responsible to check and evaluate the students homework, each one based on different programming languages.' linkRepo=''/>
                    <CareerCard year='Ago. 2022 - Dec. 2022' title='Teacher assistant - USM' subtitle='Programming languages course' description='I was responsible  to dictate an extra class, oriented  to explain and review contents viewed in class.' linkRepo=''/>
                </div>
            }

            {showEducation &&
                <div id="education" className='flex flex-col mt-10 animate-fade-right'>
                    <CareerCard year='2019 - Today' title='Computer Engineering' subtitle='Federico Santa Maria Technical University' description='I am studyin computer enginering with machine learning and computer science aspirations' linkRepo=''/>
                    <CareerCard year='2015 - 2018' title='Middle-level technical degree in electronic and home electricity' subtitle='Santa Cruz’s Polytechnic Institute - Chile' description='In this second stage of my education, I studied the specialty of home electronics and electricity. I learned the basic logic behind circuits, components and their uses, repair processes, teamwork, home electrical installations, Arduino board programming, and industrial machinery maintenance. These knowledges grant me the quality of a Mid-Level Technician.' linkRepo=''/>
                </div>
            }
        </div>
    );
}

export default Career;