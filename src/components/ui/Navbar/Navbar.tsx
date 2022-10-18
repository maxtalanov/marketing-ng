import "./Navbar.scss";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Select from "../Select/Select";

const NAVBAR_CLASS: string = 'navbar';

const DATA_NAVBAR_moc: NavbarOption[] = [
    {
        path: '/solution',
        namePath: 'Solution',
        option: true,
        options: [
            {
                path: '/tab_1',
                namePath: 'Tab 1',
                option: false,
            },
            {
                path: '/tab_2',
                namePath: 'Tab 2',
                option: false,
            },
            {
                path: '/tab_3',
                namePath: 'Tab 3',
                option: false,
            },
        ],
    },
    {
        path: '/plans',
        namePath: 'Plans',
        option: false,
    },
    {
        path: '/resource',
        namePath: 'Resource',
        option: false,
    },
    {
        path: '/blog',
        namePath: 'Blog',
        option: false,
    },
];

export interface NavbarOption {
    path: string,
    namePath: string,
    option: boolean
    options?: NavbarOption[];
}

interface NavbarProps {
    theme?: string,
    data?: NavbarOption[],
}

const Navbar: FC<NavbarProps> = ({ theme = 'grey', data = DATA_NAVBAR_moc, }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickOptions = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`${NAVBAR_CLASS}`}>
            <ul className={`${NAVBAR_CLASS}__list`}>
                {
                    data.map((data, index) => {
                        return (
                            <li key={index} className={`${NAVBAR_CLASS}__el`}>
                                {
                                    data.option
                                        ? <Select
                                            type="white"
                                            onClick={onClickOptions}
                                            isOpen={isOpen}
                                            title={data.namePath}
                                            options={data.options} />
                                        : <a
                                            href={data.path}
                                            className={`${NAVBAR_CLASS}__link ${NAVBAR_CLASS}__link_text_theme_${theme}`}
                                        >{data.namePath}</a>
                                }
                            </li>
                        )
                    })}
            </ul>
        </nav>
    )
}

export default Navbar;