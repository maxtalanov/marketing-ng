import "./Navbar.scss";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Select from "../Select/Select";

const NAVBAR_CLASS: string = 'navbar';

interface NavbarProps {
    theme?: string,
}

const Navbar: FC<NavbarProps> = ({ theme = 'grey' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickOptions = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`${NAVBAR_CLASS}`}>
            <ul className={`${NAVBAR_CLASS}__list`}>
                <li className={`${NAVBAR_CLASS}__el`}>
                    <Select type="white" onClick={onClickOptions} isOpen={isOpen} title={'Solution'} />
                </li>
                <li className={`${NAVBAR_CLASS}__el`}>
                    <a
                        href="#"
                        className={`${NAVBAR_CLASS}__link ${NAVBAR_CLASS}__link_text_theme_${theme}`}
                    >Plans</a>
                </li>
                <li className={`${NAVBAR_CLASS}__el`}>
                    <a
                        href="#"
                        className={`${NAVBAR_CLASS}__link ${NAVBAR_CLASS}__link_text_theme_${theme}`}
                    >Resource</a>
                </li>
                <li className={`${NAVBAR_CLASS}__el`}>
                    <a
                        href="#"
                        className={`${NAVBAR_CLASS}__link ${NAVBAR_CLASS}__link_text_theme_${theme}`}
                    >Blog</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;