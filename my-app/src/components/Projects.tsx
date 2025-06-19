import React from "react";
import '../styles/projects.scss';
import { ArrayProject, SectionButton } from "../utils/info";
import ProjectItem from "./ProjectItem";


const Projects: React.FC = () => {
    return (
        <div className="projects_container" id={`${SectionButton.Projects}`}>
            <h3>
                Projects
            </h3>
            <div className="projects_item_container">
                {ArrayProject.map(item => (
                        <ProjectItem link={item.link} name={item.name} img={item.img} description={item.description} />
                ))}
            </div>
        </div >
    )
}

export default Projects;