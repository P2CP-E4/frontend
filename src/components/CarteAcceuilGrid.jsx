import React from 'react';
import CarteAcceuil from './CarteAcceuil';

const CarteAcceuilGrid = () => {
    return (
        <div className='grid grid-cols-3 grid-rows-2 gap-8 px-40 py-10 '>
            <CarteAcceuil title="Inscription" description="Inscrire les nouveaux doctorants." path="/inscription" />
            <CarteAcceuil title="Réinscription" description="Réinscrire les doctorants existants." path="/reinscription" />
            <CarteAcceuil title="Modification du status" description="Modifier le status du doctorant: inscrit, différé, abandon, radié, en instance." path="/modificationstatus" />
            <CarteAcceuil title="Statistiques" description="Voir les statistiques d’informations des doctorants." path="/statistique" />
            <CarteAcceuil title="Importer" description="importer un fichier excel." path="/importer" />
            <CarteAcceuil title="Exporter" description="exporter les informations filtrés en fichier excel." path="/exporter" />
        </div >
    )
}

export default CarteAcceuilGrid