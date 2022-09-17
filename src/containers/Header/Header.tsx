import { FC } from "react";

import "./Header.scss";
import Logotype from "../../components/ui/Logotype/Logotype";
import Navbar from "../../components/ui/Navbar/Navbar";
import Clients from "../../components/Clients/Clients";
import { companyLogos } from "../../utils/constans";
import Instagram from "../../components/Instagram/Instgram";
const HEADER_CLASS: string = 'header';

const Header: FC = () => {
  return (
    <header className={`${HEADER_CLASS}`}>
      <div className={`${HEADER_CLASS}__container-bg`}>
        <div className={`${HEADER_CLASS}__bg-mask`}></div>
      </div>
      <div className={`${HEADER_CLASS}__container-bar`}>
        <Logotype />
        <Navbar theme="white"/>
        <button>Request Demon</button>
      </div>

      <div className={`${HEADER_CLASS}__container-headers`}>
        <h1 className={`${HEADER_CLASS}__title`}>
          Tell a better brand story
        </h1>
        <p className={`${HEADER_CLASS}__subtitle`}>
          Automate the way you search through hashtags and suggested
          profiles to find results 100x faster.
        </p>
      </div>

      <div className={`${HEADER_CLASS}__container-instagram`}>
        <Instagram />
      </div>


      <Clients arrIMG={companyLogos} />
    </header>
  )
}

export default Header;