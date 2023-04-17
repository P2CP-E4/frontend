import React from 'react';
import { CarteAcceuil } from './CarteAcceuil';

export const CarteAcceuilGrid = () => {
    return (
        <div className='grid grid-cols-3 grid-rows-2'>
            <CarteAcceuil title="Inscription" description="Inscrire les nouveaux doctorants." />
            <CarteAcceuil title="Réinscription" description="Réinscrire les doctorants existants." />
            <CarteAcceuil title="Modification du status" description="Modifier le status du doctorant: inscrit, différé, abandon, radié, en instance." />
            <CarteAcceuil title="Statistiques" description="Voir les statistiques d’informations des doctorants." />
            <CarteAcceuil title="Importer" description="importer un fichier excel." />
            <CarteAcceuil title="Exporter" description="exporter les informations filtrés en fichier excel." />
        </div>
    )
}
