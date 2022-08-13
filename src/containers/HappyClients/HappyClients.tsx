import "./HappyClients.scss";
import {FC} from "react";
import photo from "../../assets/ClientHappy.svg";
import One from "../../components/ui/Figure/One";

const HAPPYCLIENTS_CLASS: string = 'happy-clients';

const HappyClients: FC = () => {
    return (
        <section className={`${HAPPYCLIENTS_CLASS}`} style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "10%"}}>
            {/*<div className={`${HAPPYCLIENTS_CLASS}__container`}>*/}
            {/*    <h3 className={`${HAPPYCLIENTS_CLASS}__title`}>Happy Clients</h3>*/}
            {/*    <p className={`${HAPPYCLIENTS_CLASS}__subTitle`}>*/}
            {/*        The Marketing Accountability Standards Board (MASB) endorses the definitions, purposes, and*/}
            {/*        constructs of classes*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*<div className={`${HAPPYCLIENTS_CLASS}__container`}>*/}
            {/*    <div className={`${HAPPYCLIENTS_CLASS}__left`}></div>*/}
            {/*    <div className={`${HAPPYCLIENTS_CLASS}__right`}>*/}
            {/*        <span className={`${HAPPYCLIENTS_CLASS}__figure-semicircle`}></span>*/}
            {/*        <span className={`${HAPPYCLIENTS_CLASS}__figure-square`}></span>*/}
            {/*        <img className={`${HAPPYCLIENTS_CLASS}__img`} src={photo} alt="Изображение человека"/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <One />
        </section>
    )
}

export default HappyClients;