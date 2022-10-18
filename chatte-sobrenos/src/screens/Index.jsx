import React from 'react'
import NavBarIndex from '../components/NavBarIndex';
import SectionChatte from '../components/SectionChatte';
import SectionFuncoes from '../components/SectionFuncoes';
import SectionComunicacao from '../components/SectionComunicacao';
import SectionSalas from '../components/SectionSalas';
import SectionConheca from '../components/SectionConheca';
import SectionBaixe from '../components/SectionBaixe';
import FooterIndex from '../components/FooterIndex';

import '../style/style.css';

function Index () {
    return(

        <>
        <NavBarIndex/>
        <SectionChatte/>
        <SectionFuncoes/>
        <SectionComunicacao/>
        <SectionSalas/>
        <SectionConheca/>
        <SectionBaixe/>
        <FooterIndex/>
        </>

    );
}

export default Index;

