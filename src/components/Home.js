import Hero from './Hero';
import Animation from './Animation';

function Home () {
    return (
        <div id="home" className='h-screen w-screen flex items-center justify-center'>
            <Hero/>
            <div className='xl:w-2/5'/>
            <Animation className='animation'/>
        </div>
    );
}

export default Home;