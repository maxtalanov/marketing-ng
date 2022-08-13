import "./Instagram-Logo.scss";
import {FC} from "react";
import instagramIcon from "../../../assets/instagram/instagram-logo.svg";

const instLOGO_CLASS: string = 'instagram-logo';

interface InstagramLogoProps {
    modStyle: string;
    title: string;
}

const InstagramLogo: FC<InstagramLogoProps> = ({modStyle, title}) => {

    return (
        <div className={`${instLOGO_CLASS} ${instLOGO_CLASS}_type_${modStyle}`}>
            <img className={`${instLOGO_CLASS}__logo`} src={instagramIcon} alt='Логотип проекта'/>
            <h4 className={`${instLOGO_CLASS}__title`}>{title}</h4>
        </div>
    )
}

export default InstagramLogo;