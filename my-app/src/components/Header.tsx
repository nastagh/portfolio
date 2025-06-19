import React from "react";
import { ArraySectionButton } from "../utils/info";
import '../styles/header.scss';
import useScrollDirection from "../utils/useScrollDirection";


const Header: React.FC = () => {
    const scrollDirection = useScrollDirection();

    return (
        <header className={`header ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
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