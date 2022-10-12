import "./Select.scss";
import { FC } from "react";

const SELECT_CLASS: string = 'select';

interface SelectProps {
    type: 'white' | 'grey',
    title: string,
    isOpen: boolean,
    onClick: () => void,
}

const Select: FC<SelectProps> = ({ type, title, onClick, isOpen }) => {
    const selectList = isOpen
        ? `${SELECT_CLASS}__list ${SELECT_CLASS}__list_opened`
        : `${SELECT_CLASS}__list`;

    return (
        <div className={`${SELECT_CLASS}`}>
            <div className={`${SELECT_CLASS}__container`}>
                <button
                    className={`${SELECT_CLASS}__btn ${SELECT_CLASS}__btn_color_${type}`}
                    onClick={onClick}
                >
                    {title}
                    <i className={`${SELECT_CLASS}__btn-icon ${SELECT_CLASS}__btn-icon_theme_${type}`}></i>
                </button>
            </div>

            <ul className={selectList}>
                <li className={`${SELECT_CLASS}__item`}>
                    <a 
                        href="#"
                        className={`${SELECT_CLASS}__link ${SELECT_CLASS}__link_text_theme_${type}`}
                    >Tab 1</a>
                </li>

                <li className={`${SELECT_CLASS}__item`}>
                    <a 
                        href="#"
                        className={`${SELECT_CLASS}__link ${SELECT_CLASS}__link_text_theme_${type}`}
                    >Tab 2</a>
                </li>

                <li className={`${SELECT_CLASS}__item`}>
                    <a 
                        href="#"
                        className={`${SELECT_CLASS}__link ${SELECT_CLASS}__link_text_theme_${type}`}
                    >Tab 3</a>
                </li>
            </ul>
        </div>
    )
}

export default Select;