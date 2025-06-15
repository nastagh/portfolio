import React from "react";
import { LinkType } from "../utils/info";


const LinkItem: React.FC<LinkType> = (props) => {
    return (
        <a href={props.link} title={props.alt}>
            <img src={props.img} alt={props.alt} />
        </a>
    )
}

export default LinkItem;