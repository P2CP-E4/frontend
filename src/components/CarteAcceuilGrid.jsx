import React from 'react';
import CarteAcceuil from './CarteAcceuil';
import { Link } from 'react-router-dom';

const CarteAcceuilGrid = () => {
    return (
        <div className='grid grid-cols-3 grid-rows-2 gap-8 px-40 py-10 '>
            <CarteAcceuil title="Inscription" description="Inscrire les nouveaux doctorants." path="/inscription" />
            <CarteAcceuil title="Réinscription" description="Réinscrire les doctorants existants." />
            <CarteAcceuil title="Modification du status" description="Modifier le status du doctorant: inscrit, différé, abandon, radié, en instance." />
            <CarteAcceuil title="Statistiques" description="Voir les statistiques d’informations des doctorants." />
            <CarteAcceuil title="Importer" description="importer un fichier excel." />
            <CarteAcceuil title="Exporter" description="exporter les informations filtrés en fichier excel." />
        </div >
    )
}

export default CarteAcceuilGrid