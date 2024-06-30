import React from 'react';
import { skills } from "../data";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
    {skills.map(({ title, percentage }, index) => {
        return (
            <div className="progress_box" key={index}>
                <div className="progress_circle">
                    <CircularProgressbar 
                        strokeWidth={7.5} 
                        text={`${percentage}%`} 
                        value={percentage}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "var(--text-white)",
                        textColor: "var(--text-color)",
                        pathColor: "var(--first-color)",
                        trailColor: "lightgray"
                        })} 
                    />
                </div>

                <h3 className="skills_title">{title}</h3>
            </div>
        )
    })}
    </>
  )
}

export default Skills;