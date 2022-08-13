import "./Profiale.scss";
import {FC} from "react";
import InstagramAvatar from "../../Instagram-Avatar/Instagram-Avatar";


const PROFILE_CLASS: string = 'profile';
const Profaile:FC = () => {

    return(
        <div className={`${PROFILE_CLASS}`}>
            <div className={`${PROFILE_CLASS}__container-avatar`}>
                <InstagramAvatar />
            </div>

            <h3 className={`${PROFILE_CLASS}__fullName`}>Amanda M. Data</h3>
            <div className={`${PROFILE_CLASS}__growth-container`}>
                <h4 className={`${PROFILE_CLASS}__growth-title`}>Your Growth</h4>
                <p className={`${PROFILE_CLASS}__subscriptions`}>3,000</p>
            </div>
        </div>
    )
}

export default Profaile;