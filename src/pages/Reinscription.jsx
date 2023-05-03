import React from 'react'
import NavBar from '../components/NavBar'
import ReinscriptionTable from '../components/ReinscriptionTable'
const Reinscription = props => {
    return (
        <main className='h-screen '>
            <NavBar />
            <h1 className='text-2xl mx-auto mb-8 mt-6 w-2/3 text-[#13005A]'>Tableau des Doctorants a reinscrire :</h1>
            <div className='flex flex-col items-center w-screen'>
                <ReinscriptionTable status='inscrit' />
            </div>
        </main>
    )

}


export default Reinscription;