import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormulairePage1 from "./FormulairePage1";
import FormulairePage2 from "./FormulairePage2";
import FormulairePage3 from "./FormulairePage3";
import FormulairePage4 from "./FormulairePage4";
import ProgressBar from "./ProgressBar";

const Formulaire = () => {
    const formik = useFormik({
        initialValues: {
            FormulairePage1: {
                nom: '',
                prenom: '',
                sexe: '',
                dateNaissance: '',
                telephone: '',
                email: '',
            },
            FormulairePage2: {
                LmdOuClassique: false,
                TypeDiplome: '',
                etablissementOrigine: '',
            },
            FormulairePage3: {
                these: '',
                labo: '',
                premiereInscription: '',
                dateEnregistrement: '',
                codePV: '',
            },
            FormulairePage4: {
                nomDirecteur: '',
                etablissementDirecteur: '',
                gradeDirecteur: ''
            }
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })
    const totalPageNumber = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handleSuivantEvent = () => {
        setCurrentPage(currentPage + 1);
    }
    const handleRetourEvent = () => {
        setCurrentPage(currentPage - 1);
    }

    return (
        <div className="w-4/5 h-4/5 bg-white ">
            <ProgressBar progressValue={((currentPage / totalPageNumber) * 100) + '%'} />
            {currentPage === 1 && <FormulairePage1 formik={formik} handleSuivantEvent={handleSuivantEvent} />}
            {currentPage === 2 && <FormulairePage2 formik={formik} handleSuivantEvent={handleSuivantEvent} handleRetourEvent={handleRetourEvent} />}
            {currentPage === 3 && <FormulairePage3 formik={formik} handleSuivantEvent={handleSuivantEvent} handleRetourEvent={handleRetourEvent} />}
            {currentPage === 4 && <FormulairePage4 formik={formik} handleRetourEvent={handleRetourEvent} />}
        </div>
    );
}

export default Formulaire;