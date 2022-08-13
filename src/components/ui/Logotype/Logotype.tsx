import {FC} from "react";
import "./Logotype.scss";

const LOGOTYPE_CLASS: string = 'logotype';

interface LogotypeProps {
    title?: string;
    theme?: string;
}

const Logotype: FC<LogotypeProps> = ({title = 'Besnik.', theme= 'dark'}) => {
    return (
        <div className={`${LOGOTYPE_CLASS}`}>
            <h1
                className={`${LOGOTYPE_CLASS}__title`}
                style={{color: theme}}
            >
                {title}
            </h1>
        </div>
    )
}

export default Logotype;