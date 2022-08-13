import "./Follower.scss";
import {FC} from "react";

const FOLLOWER_CLASS: string = 'follower';

const Follower:FC = () => {

    return(
        <div className={`${FOLLOWER_CLASS}`}>
            <div className={`${FOLLOWER_CLASS}__container-current`}>
                <h3 className={`${FOLLOWER_CLASS}__title-current`}>14k</h3>
            </div>

            <div className={`${FOLLOWER_CLASS}__container-folow`}>
                <h3 className={`${FOLLOWER_CLASS}__title-folow`}>Follower Growth</h3>

                <div className={`${FOLLOWER_CLASS}__line ${FOLLOWER_CLASS}__line_size_s`}></div>
                <div className={`${FOLLOWER_CLASS}__line ${FOLLOWER_CLASS}__line_size_m`}></div>
            </div>
        </div>
    )
}

export default Follower;