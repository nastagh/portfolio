import React from "react";
import { ArraySectionButton } from "../utils/info";
import '../styles/header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav>
                <ul className="link_navigate">
                    {ArraySectionButton.map((item, index) => (
                        <li key={index}>
                            <a href={`#${item}`} title={item} className="links">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;