import {FC} from "react";

import "./Footer.scss";
import Logotype from "../../components/ui/Logotype/Logotype";
import Navbar from "../../components/ui/Navbar/Navbar";
import SocialNetwork from "../../components/ui/Social-Network/Social-Network";
import {socialLogos} from "../../utils/constans";
const FOOTER_CLASS: string = 'footer';

const Footer:FC = () => {

    return(
        <footer className={`${FOOTER_CLASS}`}>
            <div className={`${FOOTER_CLASS}__container`}>
                <Logotype />
                <Navbar />
                <SocialNetwork arrIMG={socialLogos} />
            </div>
            <span className={`${FOOTER_CLASS}__line`} />
            <p className={`${FOOTER_CLASS}__copyright `}>
                Copyright &copy; {new Date().getFullYear()} Besnik
            </p>
        </footer>
    )
}

export default Footer;