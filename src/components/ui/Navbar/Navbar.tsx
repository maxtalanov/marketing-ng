import "./Navbar.scss";
import {FC} from "react";

const NAVBAR_CLASS: string = 'navbar';

const Navbar:FC = () => {

    return(
        <nav className={`${NAVBAR_CLASS}`}>
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