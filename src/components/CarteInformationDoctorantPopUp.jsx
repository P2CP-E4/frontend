import React from 'react'
import CarteInformationDoctorant from './CarteInformationDoctorant'
const CarteInformationDoctorantPopUp = ({ handleCloseEvent }) => {
    return (
        <div
            id='blured-background'
            onClick={handleCloseEvent}
            className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center transition duration-150 ease-in-out bg-gray-700 bg-opacity-50 backdrop-blur-sm"
        >
            <CarteInformationDoctorant handleCloseEvent={handleCloseEvent} />
        </div>
    )
}

export default CarteInformationDoctorantPopUp;