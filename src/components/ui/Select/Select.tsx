import "./Select.scss";
import { FC } from "react";
import { NavbarOption } from "../Navbar/Navbar";

const SELECT_CLASS: string = 'select';

//Скоректировать тип для опций

interface SelectProps {
    type: 'white' | 'grey',
    title: string,
    isOpen: boolean,
    onClick: () => void,
    options?: NavbarOption[],
}

const Select: FC<SelectProps> = ({ type, title, onClick, isOpen, options }) => {
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
                {
                    options && options.map((option, i) => {
                        return (
                            <li key={i} className={`${SELECT_CLASS}__item`}>
                                <a
                                    href={option.path}
                                    className={`${SELECT_CLASS}__link ${SELECT_CLASS}__link_text_theme_${type}`}
                                >{option.namePath}</a>
                            </li>
                        )
                    })
                }
        
            </ul>
        </div>
    )
}

export default Select;