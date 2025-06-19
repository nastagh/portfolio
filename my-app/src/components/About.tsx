import React from "react";
import '../styles/about.scss';
import { ArraySkills, SectionButton } from "../utils/info";


const About: React.FC = () => {
    return (
        <div className="about_container" id={`${SectionButton.About}`}>
            <div className="about_text" data-aos="fade-up" data-aos-duration="3000">
                <h3>
                    About Me
                </h3>
                <p>
                    I'm a passionate Frontend Developer with a strong interest in creating clean, responsive, and user-friendly web interfaces. I'm constantly learning and expanding my skills in modern frontend technologies. I enjoy turning ideas into reality through code, and I pay close attention to both design and functionality. Whether it's building from scratch or improving existing projects, I aim to deliver high-quality, maintainable solutions. I'm currently looking for opportunities to grow as a developer and contribute to meaningful projects.
                </p>
            </div>
            <div className="about_skills" data-aos="fade-up" data-aos-duration="3000">
                <h3>
                    Skills
                </h3>
                <div className="about_skills_container">
                    {ArraySkills.map((item, i) => (
                        <div key={i} className="about_skills_item">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default About;