import React from "react";
import CarteAcceuil from "./CarteAcceuil";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const CarteAcceuilGrid = () => {
  return (
    <motion.div
      className="mx-[30px]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 border-[0px]  mb-4 rounded-[40px] border-[#9747FF] p-2 shadow-lg">
          <motion.div variants={item} className=" w-full  ">
            <CarteAcceuil
              title="Inscription"
              description="Inscrire les nouveaux doctorants."
              path="/inscription"
            />
          </motion.div>
          <motion.div variants={item} className=" w-full ">
            <CarteAcceuil
              title="Réinscription"
              description="Réinscrire les doctorants existants."
              path="/reinscription"
            />
          </motion.div>
          <motion.div variants={item} className="  w-full ">
            <CarteAcceuil
              title="Réinscription différée"
              description="Réinscrire différé des doctorants existants."
              path="/reinscriptionDiffere"
            />
          </motion.div>
        </div>

        <div className="flex gap-6 ">
          {" "}
          <div className="flex gap-4 border-[0px] mb-[35px] rounded-[40px] border-[#9747FF] shadow-lg p-2">
            {" "}
            <div className="flex flex-col gap-2 ">
              <motion.div variants={item} className="w-full">
                <CarteAcceuil
                  title="Modification du status"
                  description="Modifier le status du doctorant: inscrit, différé, abandon, radié, en instance."
                  path="/modificationstatus"
                />
              </motion.div>
              <motion.div variants={item} className="w-full">
                <CarteAcceuil
                  title="Modification de thése"
                  description="Modifier les these des doctorants."
                  path="/changementThese"
                />
              </motion.div>
              <motion.div variants={item} className="w-full">
                <CarteAcceuil
                  title="Modification des informations personnelles"
                  description="Modifier les informations personnelles des doctorants."
                  path="/modificationPersonnelInformations"
                />
              </motion.div>
            </div>
            <div className="flex gap-8 flex-col">
              <motion.div variants={item} className="w-full">
                <CarteAcceuil
                  title="Ajout d’un séminaire"
                  description="Ajouter un séminaire à un doctorant."
                  path="/ajoutSiminaire"
                />
              </motion.div>
              <motion.div variants={item} className="w-full">
                <CarteAcceuil
                  title="Ajout d’une Observation"
                  description="Ajouter une observation à un doctorant."
                  path="/ajoutObservation"
                />
              </motion.div>
              <motion.div variants={item} className="w-full">
                <CarteAcceuil
                  title="Ajout de la Date d’enregistrement du fichier central"
                  description=""
                  path="/ajoutFCT"
                />
              </motion.div>
            </div>{" "}
          </div>
          <div className="flex flex-col items-center gap-8 mt-[48px] mb-[120px] p-2 border-[0px] rounded-[40px] border-[#03C988] shadow-lg">
            <motion.div variants={item} className=" w-full ">
              <CarteAcceuil
                title="Importer"
                description="importer un fichier excel."
                path="/importer"
              />
            </motion.div>
            <motion.div variants={item} className="w-full ">
              <CarteAcceuil
                title="Exporter"
                description="exporter les informations filtrés en fichier excel."
                path="/exporter"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarteAcceuilGrid;
