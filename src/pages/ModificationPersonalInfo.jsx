import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import ModificationForm from '../components/ModificationForm'
import SearchBar from '../components/SearchBar'
import data from '../data/doctorant_data.json'
const ModificationPersonalInfo = () => {
    const [page, setPage] = useState(0);
    const [searchResult, setSearchResult] = useState('');

    const handleSubmitSearch = (e) => {
        setSearchResult(e.target.value)
    }

    const handleClickEvent = () => {
        setPage(1)
    }
    console.log(searchResult);
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen pb-8'>
            <NavBar />
            <h1 className='text-2xl text-center mt-6 text-[#03C988]'>Modification Informations personnelles du Doctorant :</h1>
            {page === 0 && <h3 className='mt-8 text-lg text-center mb-28'>Veuillez entrer le nom complet du doctorant :</h3>}
            {page === 0 &&
                <div className='flex justify-center w-full h-full gap-5 pl-12'>
                    <SearchBar placeholder='Nom Complet' data={data} handleaSubmit={handleSubmitSearch} />
                    <button className=' border-transparent h-12  rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border hover:border-[#03C988]' onClick={handleClickEvent}>Comfirmer</button>
                </div>
            }
            {page === 1 && <ModificationForm />}
        </div>
    )
}

export default ModificationPersonalInfo