import { FC } from "react";
import Emoji from "./card/Emoji/Emoji";
import Follower from "./card/Follower/Follower";
import MediaType from "./card/MediaType/Media-Type";
import NewFriends from "./card/NewFriends/NewFriends";
import Profaile from "./card/Profile/Profile";
import "./Instagram.scss";

const INSTAGRAM_CLASS: string = 'instagram';

const Instagram:FC = () => {

    return (
        <div className={`${INSTAGRAM_CLASS}`}>
        
            <div className={`${INSTAGRAM_CLASS}__container ${INSTAGRAM_CLASS}__container_type_profile`}>
                <Profaile />
            </div>

            <div className={`${INSTAGRAM_CLASS}__container ${INSTAGRAM_CLASS}__container_type_media`}>  
                <MediaType />
            </div>

            <div className={`${INSTAGRAM_CLASS}__container ${INSTAGRAM_CLASS}__container_type_emoji`}>
                <Emoji />
            </div>

            <div className={`${INSTAGRAM_CLASS}__container ${INSTAGRAM_CLASS}__container_type_follower`}>
                <Follower />
            </div>

            <div className={`${INSTAGRAM_CLASS}__container ${INSTAGRAM_CLASS}__container_type_newFrends`}>
                <NewFriends />
            </div>
        </div>
    )
}

export default Instagram;