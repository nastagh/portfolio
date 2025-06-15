import React from "react";
import '../styles/contact.scss';
import { SectionButton, ContactInfo  } from "../utils/info";
import LinkItem from "./LinkItem";

const Contact: React.FC = () => {
    return (
        <div className="contact_container" id={`${SectionButton.Contact}`}>
            <div className="contact_item_container">
                    {ContactInfo.map(item => (
                        <LinkItem link={item.link} img={item.img} alt={item.alt}/>
                    ))}
            </div>
            <p>
                © 2025 Anastasiya Mikhailovskaya
            </p>
        </div>
    )
}

export default Contact;