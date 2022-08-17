import "./Typography.scss"
import {FC} from "react";

const TYPOGRAPHY_CLASS: string = 'typography';

interface TypographyProps {
    tag?: string;
    children: any;
}

const Typography:FC<TypographyProps> = ({tag, children}) => {
    switch (tag) {
        case 'h1': return (<h1 className={`${TYPOGRAPHY_CLASS}__h1`}>{children}</h1>);
        case 'h2': return (<h2 className={`${TYPOGRAPHY_CLASS}__h2`}>{children}</h2>);
        case 'h3': return (<h3 className={`${TYPOGRAPHY_CLASS}__h3`}>{children}</h3>);

        default: return (<h1 className={`${TYPOGRAPHY_CLASS}__h1`}>{children}</h1>);
    }
}

export default Typography;