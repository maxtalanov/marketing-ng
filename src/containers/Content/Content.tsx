import "./Content.scss"
import React, {FC} from "react";
import SocialMediaSearch from "../SocialMediaSearch/SocialMediaSearch";
const CONTENT_CLASS: string = 'content';

const Content: FC = () => {

    return(
        <main className={`${CONTENT_CLASS}`}>
            <SocialMediaSearch />
        </main>
    )
}

export default Content;