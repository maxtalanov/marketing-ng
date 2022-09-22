import { FC } from "react";

import "./Header.scss";
import Logotype from "../../components/ui/Logotype/Logotype";
import Navbar from "../../components/ui/Navbar/Navbar";
import Clients from "../../components/Clients/Clients";
import { companyLogos } from "../../utils/constans";
import Instagram from "../../components/Instagram/Instgram";
import Button from "../../components/ui/Button/Button";
import { SizesBtn, typeBtn } from "../../components/ui/Button/Button";
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
        {/* <button>Request Demon</button> */}
        <Button type={typeBtn.navbar} title="Request Demon" size={SizesBtn.S} width='154px' />
      </div>

      <div className={`${HEADER_CLASS}__container-headers`}>
        <h1 className={`${HEADER_CLASS}__title`}>
          Tell a better brand story
        </h1>
        <p className={`${HEADER_CLASS}__subtitle`}>
          Automate the way you search through hashtags and suggested
          profiles to find results 100x faster.
        </p>
        {/* <button className={`${HEADER_CLASS}__bth`}>Request Demo</button> */}
        <Button type={typeBtn.header} theme="dark-blue" title="Request Demo" size={SizesBtn.M} width='202px' icon={true} />
      </div>

      <div className={`${HEADER_CLASS}__container-instagram`}>
        <Instagram />
      </div>

      <Clients arrIMG={companyLogos} />
    </header>
  )
}

export default Header;