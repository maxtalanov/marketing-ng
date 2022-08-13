import {FC} from "react";
import "./Social-Network.scss";
import {ISocialNetwork} from "../../../types/typeSocialNetwork";

const SOCIAL_CLASS: string = 'social';
const IMG_URL: string = `${window.location.origin}/social-icon/`;

interface SocialNetworkProps {
    arrIMG:  ISocialNetwork[] | null;
}

const SocialNetwork:FC<SocialNetworkProps> = ({ arrIMG}) => {

    return(
        <div className={`${SOCIAL_CLASS}`}>
            {
                arrIMG && arrIMG.map((el, index) => {
                    return(
                        <img
                            className={`${SOCIAL_CLASS}__el`}
                            key={index}
                            src={IMG_URL+'/'+el.img}
                            alt={`Логотип нашего портнера ${el.socialName}`}
                        />
                    )
                })
            }
        </div>
    )
}

export default SocialNetwork;