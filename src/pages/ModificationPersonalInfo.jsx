import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import ModificationForm from '../components/ModificationForm'
import SearchBar from '../components/SearchBar'
import data from '../data/doctorant_data.json'
const ModificationPersonalInfo = () => {
    const [searchResult, setSearchResult] = useState('');
    console.log(searchResult)
    const handleSubmitSearch = (e) => {
        setSearchResult(e.target.value)
    }

    return (
        <div className='relative flex flex-col items-center w-screen h-screen pb-8'>
            <NavBar />
            <h1 className='text-2xl text-center my-3 text-[#03C988]'>Modification Informations personnelles du Doctorant :</h1>
            <h3 className='text-sm text-center '>Veuillez entrer le nom complet du doctorant :</h3>
            <SearchBar placeholder='Nom Complet' data={data} handleaSubmit={handleSubmitSearch} />
            <div className={`w-full flex justify-center mt-4 ${searchResult ? '' : 'grayscale'}`}>
                <ModificationForm />
            </div>
        </div >
    )
}

export default ModificationPersonalInfo