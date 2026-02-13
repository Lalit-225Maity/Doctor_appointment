import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Home.css'
import { useEffect, useState } from 'react'
const Home = () => {

    return (
        <div className='home'>
            <div className="search-box">
                <div className="typewriter">
                    <Typewriter
                        words={['Stay at Home. Consult Doctors Online.']}
                        loop
                        cursor
                        cursorStyle=''
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={4000}
                    />
                </div>
                <div className="search">
                    <input type="text" placeholder='search for any health keyword' />
                    <button >search</button>
                </div>
                <div className="topics">
                    <p>Trending Topics:</p>
                    <p>Celiac Disease</p>
                    <p>Bipolar Disorder</p>
                    <p>Fungal Infection</p>
                    <p>Mental Disorders</p>
                    <p>Heart Disease</p>
                    <p>Diabetes</p>
                </div>
                <div className="discover">
                    <p>Discover an Exciting Career Opportunity – Join Our Leading Team of Doctors and Make a Difference</p>
                    <button>!KNOW MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Home
