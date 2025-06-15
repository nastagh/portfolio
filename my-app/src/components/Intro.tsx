import React from "react";
import '../styles/intro.scss';
import { SectionButton, ContactInfo } from "../utils/info";
import LinkItem from "./LinkItem";


const Intro: React.FC = () => {
    return (
        <div className="intro" id={`${SectionButton.Home}`}>
            <div className="intro_foto_contact_container">
                <img src={`${process.env.PUBLIC_URL}/assets/IMG_5776.jpg`} alt="foto" className="intro_foto"/>
                <div className="intro_contact_container">
                    {ContactInfo.map(item => (
                        <LinkItem link={item.link} img={item.img} alt={item.alt}/>
                    ))}
                </div>
            </div>
            <div className="intro_text_container">
                <h1>
                    Hello, I'm <br /> Anastasiya <br />Mikhailovskaya
                </h1>
                <p>
                    Frontend Developer
                </p>
                <button>
                    <a href={`#${SectionButton.Projects}`}>
                        View Projects
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Intro;