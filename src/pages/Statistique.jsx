import React from 'react'
import NavBar from '../components/NavBar'
import CartesInformationsDirecteur from '../components/CarteInformationDirecteur';
function Statistique() {
    return (
        <>
            <NavBar />
            <div className='w-screen h-screen'>
                <CartesInformationsDirecteur />
            </div>
        </>
    )
}

export default Statistique;