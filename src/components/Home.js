import Hero from './Hero';

function Home () {
    return (
        <div id="home" className='h-screen w-screen flex items-center justify-center'>
            <Hero/>
            <div className='w-1/3'/>
        </div>
    );
}

export default Home;