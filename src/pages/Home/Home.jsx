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
                    <span>ANNA MIENE</span> Software Developer
                </h1>

                <p className="home_description">
                    I'm a Full Stack Engineer and student at the University of Lagos, based in Nigeria. 
                    I build web applications using React, Node.js, and other modern tools to create responsive, 
                    scalable, and efficient solutions. I enjoy working on both frontend and backend, 
                    and I'm always learning new ways to improve my code and user experience. 
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