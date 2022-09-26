import "./Content.scss"
import React, {FC} from "react";
import SocialMediaSearch from "../SocialMediaSearch/SocialMediaSearch";
import HappyClients from "../HappyClients/HappyClients";

const CONTENT_CLASS: string = 'content';

const Content: FC = () => {

    return(
        <main className={`${CONTENT_CLASS}`}>
            <SocialMediaSearch />
            <HappyClients />
        </main>
    )
}

export default Content;