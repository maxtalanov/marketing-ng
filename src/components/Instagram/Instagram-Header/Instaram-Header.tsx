import "./Instagram-Header.scss";

import InstagramLogo from "../Instagram-Logo/Instagram-Logo";
import InstagramTool from "../Instagram-Toll/Instagram-Tool";
import {FC} from "react";

const instHEADER_CLASS: string = 'inst-header';

interface InstagramHeaderProps {
    type: string;
    title: string;
    modStyle?: 'dark' | 'grey';
}

const InstagramHeader: FC<InstagramHeaderProps> = ({type, title, modStyle}) => {

    return(
        <div className={`${instHEADER_CLASS}`}>
            { type === 'media' ? <InstagramLogo modStyle={type} title={title}/> : null }
            { type === 'newFrends' ? <InstagramLogo modStyle={type} title={title} /> : null }

            { type === 'media' ? <InstagramTool modStyle={modStyle}/> : null }
            { type === 'newFrends' ? <InstagramTool modStyle={modStyle}/> : null }


        </div>
    )
}

export default InstagramHeader;