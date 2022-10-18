import react from "react";
import SectionValores from "../components/SectionValores";
import NavBar from "../components/NavBar";
import FooterIndex from "../components/FooterIndex";

import '../style/valores.css';

function Valores() {
    return(

        <>
            <NavBar/>
            <SectionValores/>
            <FooterIndex/>
        </>

    );
}

export default Valores;