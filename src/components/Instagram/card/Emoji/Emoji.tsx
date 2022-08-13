import "./Emoji.scss";
import {FC} from "react";
import amazingIcon from "../../../../assets/instagram/emoji/amazing.svg";
import evilIcon from "../../../../assets/instagram/emoji/evil.svg";
import loveIcon from "../../../../assets/instagram/emoji/love.svg";
const EMOJI_CLASS: string = 'emoji';

const Emoji:FC = () => {

    return(
        <div className={`${EMOJI_CLASS}`}>
            <img className={`${EMOJI_CLASS}__icon`} src={amazingIcon} alt="Иконка удивления" />
            <img className={`${EMOJI_CLASS}__icon`} src={evilIcon} alt="Иконка злости" />
            <img className={`${EMOJI_CLASS}__icon`} src={loveIcon} alt="Иконка лайка" />
        </div>
    )
}

export default Emoji
