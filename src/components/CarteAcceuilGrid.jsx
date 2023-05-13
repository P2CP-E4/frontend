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
      className='grid  grid-rows-1 gap-4 mx-[30px]'
      variants={container}
      initial='hidden'
      animate='visible'
    >

      <div className='flex gap-4'>
        <motion.div variants={item} className='w-full '>
          <CarteAcceuil
            title='Inscriptions'
            description={
              <ul className='list-disc'>
                <li>Inscription</li>
                <li>Réinscription</li>
                <li>Réinscription différée</li>
              </ul>
            }
            path='/inscription'
            assetNumber={1}
          />
        </motion.div>
        <motion.div variants={item} className='w-full '>
          <CarteAcceuil
            title='Modifier'
            description={
              <ul className='list-disc'>
                <li>Le status</li>
                <li>Titre de these</li>
                <li>Informations personnelles des doctorants</li>
              </ul>
            }
            path='/modificationStatus'
            assetNumber={2}
          />
        </motion.div>

        <motion.div variants={item} className='w-full '>
          <CarteAcceuil
            title='Ajouter'
            description={
              <ul className='list-disc'>
                <li>Seminaire</li>
                <li>Observation</li>
                <li>Date enregistrement FCT</li>
              </ul>
            }
            path='/ajoutSeminaire'
            assetNumber={3}
          />
        </motion.div>

        <motion.div variants={item} className='w-full '>
          <CarteAcceuil
            title='Statistiques'
            description={
              <ul className='list-disc'>
                <li>Statistiques numeriques et graphiques</li>
                <li>Tableau des doctorants</li>
                <li>Tableau des PVs</li>
              </ul>}
            path='/statistiquePredefinie'
            assetNumber={4}
          />
        </motion.div>

        <motion.div variants={item} className='w-full '>
          <CarteAcceuil
            title='Importer et exporter'
            description={
              <ul className='list-disc'>
                <li>Importer un fichier Excel</li>
                <li>Exporter les données en fichier Excel</li>
              </ul>}
            path='/importer'
            assetNumber={5}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CarteAcceuilGrid; 