import "./Navbar.scss";
import {FC} from "react";

const NAVBAR_CLASS: string = 'navbar';

interface NavbarProps {
    theme?: string,
}

const Navbar:FC <NavbarProps> = ({ theme='grey' }) => {
    console.log(`${NAVBAR_CLASS}_text_theme_${theme}`)
    
    return(
        <nav className={`${NAVBAR_CLASS} ${NAVBAR_CLASS}__text_theme_${theme}`}>
            <ul className={`${NAVBAR_CLASS}__list`}>
                <li className={`${NAVBAR_CLASS}__el`}>Solution</li>
                <li className={`${NAVBAR_CLASS}__el`}>Plans</li>
                <li className={`${NAVBAR_CLASS}__el`}>Resource</li>
                <li className={`${NAVBAR_CLASS}__el`}>Blog</li>
            </ul>
        </nav>
    )
}

export default Navbar;