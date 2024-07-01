import React from 'react';
import { Link } from 'react-router-dom';
import profile from "../../assets/Profile1.jpg";
import { FaArrowRight } from 'react-icons/fa';
import "./Home.css";

const Home = () => {
  return (
    <section className="home section grid">
        <div className='home_img_container'>
            <img src={profile} alt="Profile" className='home_img'/>
        </div>

        <div className="home_content">
            <div className="home_data">
                <h1 className="home_title">
                    <span>I'm IntroHive</span> Software Developer
                </h1>

                <p className="home_description">
                    I am a passionate Web Designer and Full-stack Developer based in Nigeria. I specialize in crafting dynamic, 
                    user-friendly web applications that blend creativity with robust functionality. 
                    With a keen eye for design and a commitment to excellence, I transform ideas into impactful digital experiences. 
                    Let's create something extraordinary together. 
                </p>

                <Link to="/about" className='button'>
                    More about me 
                    <span className='button_icon'>
                        <FaArrowRight/>
                    </span>
                </Link>
            </div>
        </div>

        <div className="color_block"></div>
    </section>
  )
}

export default Home;