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
                    I am a Nigerian-based Web Designer & Full-stack Developer 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit debitis dignissimos repellendus mollitia aliquid ipsam! 
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