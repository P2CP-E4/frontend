import React from 'react'
import NavBar from '../components/NavBar'
import ChangementStatusCheckBox from '../components/ChangementStatusCheckBox';
function Aide() {
    return (
        <>
            <NavBar />
            <div className='flex items-center justify-center w-screen h-screen bg-slate-500'>
                <ChangementStatusCheckBox />
            </div >
        </>
    )
}

export default Aide;