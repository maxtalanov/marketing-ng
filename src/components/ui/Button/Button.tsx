import { FC } from "react";
import "./Button.scss";
import btnIcon from "../../../assets/icons/next.svg";

const BUTTON_CLASS: string = 'button';
export const enum SizesBtn {
    S = '42px',
    M = '52px',
}

export const enum typeBtn {
    navbar = 'navbar',
    header = 'header',
    content = 'content',
}

interface ButtonProps {
    type: typeBtn;
    theme?: string,
    title: string,
    width?: string,
    size?: SizesBtn,
    icon?: boolean, 
}

const Button: FC<ButtonProps> = ({ type, theme, title, size, width, icon=false }) => {
    console.log(icon);
    return(
        <button className={`${BUTTON_CLASS} ${BUTTON_CLASS}_theme_${theme} ${BUTTON_CLASS}__${type}`} style={{height: size, width: width}}>
            <span className={`${BUTTON_CLASS}__title`}>{title}</span>
            {
                icon 
                ? <img className={`${BUTTON_CLASS}__icon`} src={btnIcon} alt="Иконка для кнопки" />
                : null
            }
        </button>
    )
}

export default Button;