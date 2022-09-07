import { FC } from "react";

import "./Header.scss";
import Logotype from "../../components/ui/Logotype/Logotype";
import Navbar from "../../components/ui/Navbar/Navbar";
import Clients from "../../components/Clients/Clients";
import { companyLogos } from "../../utils/constans";
const HEADER_CLASS: string = 'header';

const Header: FC = () => {
  return (
    <header className={`${HEADER_CLASS}`}>

      <Logotype />
      <Navbar />

      <Clients arrIMG={companyLogos} />
    </header>
  )
}

export default Header;