import {FC} from "react";
import {ICompanyLogo} from "../../types/typeCompany";

import "./Clients.scss"

const CLIENTS_CLASS: string = 'clients';
const IMG_URL: string = `${window.location.origin}/logo-company/`;

interface ClientsProps {
    arrIMG: ICompanyLogo[] | null;
}


const Clients: FC<ClientsProps> = ({arrIMG}) => {
    console.log(window.location.origin)
    return (
        <section className={`${CLIENTS_CLASS}`}>
            <h3 className={`${CLIENTS_CLASS}__title`}>SOME OF OUR TRUSTED CLIENTS</h3>

            <div className={`${CLIENTS_CLASS}__container`}>
                {
                    arrIMG && arrIMG.map((el, index) => {
                        return (
                            <img className={`${CLIENTS_CLASS}__el`}
                                 key={index}
                                 src={IMG_URL + '/' + el.img}
                                 alt={`Логотип нашего портнера ${el.componyName}`}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Clients;