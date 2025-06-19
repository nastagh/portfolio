import React, { useState } from "react";
import '../styles/projects.scss';
import { ProjectType } from "../utils/info";


const ProjectItem: React.FC<ProjectType> = (props) => {
    const [showDesc, setShowDesc] = useState(false);

    const handleTap = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
        if (isTouch && !showDesc) {
            e.preventDefault();
            setShowDesc(true);
        }
    };

    return (
        <a href={props.link}
            title={props.name}
            className="project_item_container_link"
            data-aos="fade-up"
            data-aos-duration="3000"
            onClick={handleTap}>
            <div className="project_item_container">
                <img src={props.img} alt={props.name} />
                <div className={`overlay ${showDesc ? 'visible' : ''}`}>
                    <p className="project_title">
                        {props.name}
                    </p>
                    <p className="project_text">
                        {props.description}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default ProjectItem;