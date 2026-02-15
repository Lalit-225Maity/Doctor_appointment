import React, { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Home.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const [tick, settick] = useState(false);
    const {
        register,
        reset,
        setValue,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm();
    const SelectDoc = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const response = await axios.get(`/api/fethdoctor?keyword=${data.keyword}`);
                    console.log(response.data.docDetail);
                    navigate('/doctors', { state: { doc: response.data.docDetail } })
                    resolve("success");

                } catch (error) {
                    console.log(error.message);

                }
            }, 3000);
        })
        reset();
    }
    const HandleSelect=(value)=>{
        setValue("keyword",value);
        handleSubmit(SelectDoc)()
    }
    return (
        <div className='home' onClick={(e)=>{ settick(false)}} >
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
                <form className="search" onSubmit={handleSubmit(SelectDoc)} >
                    <input type="text" placeholder='search for any health keyword' {...register('keyword')} onClick={(e) => {e.stopPropagation(); settick(true) }} />
                    <button type="submit">{isSubmitting ? "searching...." : "search"}</button>
                     {tick && (
                    <div className="search-desease">
                        <p onClick={() => { HandleSelect("Acne/Pimples") }}>Acne/Pimples</p>
                        <p onClick={() => { HandleSelect("Hair Fall") }}>Hair Fall</p>
                        <p onClick={() => { HandleSelect("Premature Ejaculation")}}>Premature Ejaculation</p>
                        <p onClick={() => { HandleSelect("Erection Problems") }}>Erection Problems</p>
                        <p onClick={() => {  HandleSelect("Erection Problems") }}>Weight Loss</p>
                        <p onClick={() => { HandleSelect("Depression") }}>Depression</p>
                        <p onClick={() => { HandleSelect("Irregular Periods") }}>Irregular Periods</p>
                        <p onClick={() => { HandleSelect("Pregnancy") }}>Pregnancy</p>
                        <p onClick={() => { HandleSelect("Knee Pain") }}>Knee Pain</p>
                        <p onClick={() => { HandleSelect("Childcare") }}>Childcare</p>
                        <p onClick={() => {  HandleSelect("Diabetes")}}>Diabetes</p>
                    </div>
                )}
                     
                </form>
                 
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
