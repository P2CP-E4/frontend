import React from 'react';
import CarteAcceuil from './CarteAcceuil';
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,

        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const CarteAcceuilGrid = () => {
    return (
        <motion.div
            className='grid grid-cols-3 grid-rows-2 gap-8 px-20'
            variants={container}
            initial='hidden'
            animate='visible'
        >
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Inscription'
                    description='Inscrire les nouveaux doctorants.'
                    path='/inscription'
                />
            </motion.div>
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Réinscription'
                    description='Réinscrire les doctorants existants.'
                    path='/reinscription'
                />
            </motion.div>
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Réinscription diff'
                    description='Réinscrire différé des doctorants existants.'
                    path='/reinscription'
                />
            </motion.div>
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Modification du status'
                    description='Modifier le status du doctorant: inscrit, différé, abandon, radié, en instance.'
                    path='/modificationstatus'
                />
            </motion.div>
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Modification de these'
                    description='Modifier les these des doctorants.'
                    path='/changementThese'
                />
            </motion.div>
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Modification des Info personnelles'
                    description='Modifier les informations personnelles des doctorants.'
                    path='/modificationPersonnelInformations'
                />
            </motion.div>
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Ajout d’un siminaire'
                    description='Ajouter un séminaire à un doctorant.'
                    path='/ajoutSiminaire'
                />
            </motion.div>
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Ajout d’une Observation'
                    description='Ajouter une observation à un doctorant.'
                    path='/ajoutObservation'
                />
            </motion.div>
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Ajout de la Date d’enregistrement du fichier central'
                    description=''
                    path='/ajoutFCT'
                />
            </motion.div>
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Statistiques'
                    description='Voir les statistiques d’informations des doctorants.'
                    path='/statistique'
                />
            </motion.div>
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Importer'
                    description='Importer un fichier excel.'
                    path='/importer'
                />
            </motion.div>
            <motion.div variants={item}>
                <CarteAcceuil
                    title='Exporter'
                    description='Exporter les informations filtrées en fichier excel.'
                    path='/exporter'
                />
            </motion.div>
        </motion.div>
    );
};

export default CarteAcceuilGrid; 