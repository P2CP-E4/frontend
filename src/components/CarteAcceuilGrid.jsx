import React from 'react';
import CarteAcceuil from './CarteAcceuil';

const CarteAcceuilGrid = () => {
    return (
        <div className='grid grid-cols-3 grid-rows-2 gap-8 px-20'>
            <CarteAcceuil title="Inscription" description="Inscrire les nouveaux doctorants." path="/inscription" />
            <CarteAcceuil title="Réinscription" description="Réinscrire les doctorants existants." path="/reinscription" />
            <CarteAcceuil title="Réinscription diff" description="Réinscrire différé des doctorants existants." path="/reinscription" />
            <CarteAcceuil title="Modification du status" description="Modifier le status du doctorant: inscrit, différé, abandon, radié, en instance." path="/modificationstatus" />
            <CarteAcceuil title="Modification de these" description="Modifier les these des doctorants." path="/changementThese" />
            <CarteAcceuil title="Modification des Info personnelles" description="Modifier le status du doctorant: inscrit, différé, abandon, radié, en instance." path="/modificationPersonnelInformations" />
            <CarteAcceuil title="Ajout d’un siminaire" description="Ajouter un siminaire a un doctorant." path="/ajoutSiminaire" />
            <CarteAcceuil title="Ajout d’une Observation" description="Ajouter une observation a un doctorant." path="/ajoutObservation" />
            <CarteAcceuil title="Ajout de la Date d’enregistrement du fichier central" description="" path="/ajoutFCT" />
            <CarteAcceuil title="Statistiques" description="Voir les statistiques d’informations des doctorants." path="/statistique" />
            <CarteAcceuil title="Importer" description="importer un fichier excel." path="/importer" />
            <CarteAcceuil title="Exporter" description="exporter les informations filtrés en fichier excel." path="/exporter" />
        </div >
    )
}

export default CarteAcceuilGrid;