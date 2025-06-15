import React from "react";
import '../styles/projects.scss';
import { ProjectType } from "../utils/info";


const ProjectItem: React.FC<ProjectType> = (props) => {
    return (
        <a href={props.link} title={props.name} className="project_item_container">
                <img src={props.img} alt={props.name} />
                <p className="project_title">
                    {props.name}
                </p>
                <p className="project_text">
                    {props.description}
                </p>
        </a>
    )
}

export default ProjectItem;