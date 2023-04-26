import React from 'react'
import NavBar from '../components/NavBar'
import ModificationStatusCheckBox from '../components/ModificationStatusCheckBox';
function Aide() {
    return (
        <>
            <NavBar />
            <div className='flex items-center justify-center w-screen h-screen bg-slate-500'>
                <ModificationStatusCheckBox />
            </div >
        </>
    )
}

export default Aide;