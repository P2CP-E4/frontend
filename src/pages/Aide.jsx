import React from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar';
import data from '../data/doctorant_data.json'
function Aide() {
    return (
        <>
            <div className='flex flex-col items-center justify-center w-screen h-full'>
                <NavBar />
                <SearchBar placeholder='entrer le nom' data={data} />
            </div>
        </>
    )
}
export default Aide;