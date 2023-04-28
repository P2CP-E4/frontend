import React from 'react'
import NavBar from '../components/NavBar'
import ModificationStatusCheckBox from '../components/ModificationStatusCheckBox';
import CarteError from '../components/CarteError';
import CarteSuccess from '../components/CarteSuccess';
import CarteWarning from '../components/CarteWarning';
import ModificationForm from '../components/ModificationForm';
function Aide() {
    return (
        <>
            <div className='flex flex-col items-center justify-center w-screen h-full'>
                <NavBar />
                <ModificationForm />
            </div>
        </>
    )
}
export default Aide;