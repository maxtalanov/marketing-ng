import { FC } from "react";
import './NewFriends.scss';
import InstagramHeader from "../../Instagram-Header/Instaram-Header";

const newFRENDS_CLASS: String = 'new-frends';

const NewFriends: FC = () => {
    return (
        <div className={`${newFRENDS_CLASS}`}>
            <InstagramHeader type={'newFrends'} title={'Follower Growth'}/>
            <h3 className={`${newFRENDS_CLASS}__title`}>
                16.2k{'\u00A0'}
                <span className={`${newFRENDS_CLASS}__span`}>
                    New Followers
                </span>
            </h3>
        </div>
    )
}

export default NewFriends;