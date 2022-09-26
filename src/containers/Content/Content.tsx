import "./Content.scss"
import React, {FC} from "react";
import SocialMediaSearch from "../SocialMediaSearch/SocialMediaSearch";
import HappyClients from "../HappyClients/HappyClients";
import ContentBlockOne from "../ContentBlock-1/ContentBlock-1";

const CONTENT_CLASS: string = 'content';

const Content: FC = () => {

    return(
        <main className={`${CONTENT_CLASS}`}>
            <ContentBlockOne />
            <SocialMediaSearch />
            <HappyClients />
        </main>
    )
}

export default Content;