import React from 'react'
import NavBar from '../components/NavBar'
import ModificationStatusCheckBox from '../components/ModificationStatusCheckBox';
import CarteError from '../components/CarteError';
import CarteSuccess from '../components/CarteSuccess';
import CarteWarning from '../components/CarteWarning';
function Aide() {
    return (
        <>
            <NavBar />
            <CarteError />
            <CarteSuccess />
            <CarteWarning />
        </>
    )
}
export default Aide;