import Hero from './Hero';
import Animation from './Animation';

function Home () {
    return (
        <div id="home" className='h-screen w-screen flex items-center justify-center'>
            <Hero/>
            <div className='2xl:w-2/5'/>
            <Animation className='animation'/>
            <a className='scroll-down absolute right-2 sm:right-10 bottom-5 text-sm xl:text-xl' href='#about'><div>▼ Scroll down</div></a>
        </div>
    );
}

export default Home;