import {FC} from "react";
import "./InstagramAvatar.scss";
import avatar from "../../../assets/instagram/instagram-avatar.svg";
const instAVATAR_CLASS: string = 'inst-avatar';

const InstagramAvatar:FC = () => {

    return(
        <div className={`${instAVATAR_CLASS}`}>
            <img className={`${instAVATAR_CLASS}__img`} src={avatar} alt="Аватар пользователя для карточки инстаграм"/>
        </div>
    )
}

export default InstagramAvatar;