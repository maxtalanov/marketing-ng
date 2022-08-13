import {FC} from "react";
import "./Instagram-Tool.scss"

const instTool_CLASS: string = 'inst-tool';
export interface InstagramToolProps {
    modStyle?: 'dark' | 'grey';
}


const InstagramTool: FC<InstagramToolProps> = ({modStyle='dark'}) => {

    return (
        <div className={`${instTool_CLASS}`}>
            <button
                className={`
                ${instTool_CLASS}__btn
                ${instTool_CLASS}__btn_bg_layout-${modStyle}
                `}
            />
            <button
                className={`
                ${instTool_CLASS}__btn
                ${instTool_CLASS}__btn_bg_download-${modStyle}
                `}
            />
        </div>
    )
}

export default InstagramTool;