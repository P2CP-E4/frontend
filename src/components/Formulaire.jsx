import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormulairePage1 from "./FormulairePage1";
import FormulairePage2 from "./FormulairePage2";
import FormulairePage3 from "./FormulairePage3";
import FormulairePage4 from "./FormulairePage4";
import ProgressBar from "./ProgressBar";
import { useMultiStepForm } from "../hooks/useMultiStepForm";

const Formulaire = () => {
    const formik = useFormik({
        initialValues: {
            // FormulairePage1
            nom: '',
            prenom: '',
            sexe: '',
            dateNaissance: '',
            telephone: '',
            email: '',
            // FormulairePage2
            LmdOuClassique: false,
            TypeDiplome: '',
            etablissementOrigine: '',
            // FormulairePage3
            these: '',
            labo: '',
            premiereInscription: '',
            dateEnregistrement: '',
            codePV: '',
            // FormulairePage4
            nomDirecteur: '',
            etablissementDirecteur: '',
            gradeDirecteur: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } = useMultiStepForm([
        <FormulairePage1 formik={formik} />,
        <FormulairePage2 formik={formik} />,
        <FormulairePage3 formik={formik} />,
        <FormulairePage4 formik={formik} />
    ]);

    const onSubmit = (e) => {
        e.preventDefault();
        next();
    }
    return (
        <div className="flex flex-col items-center w-3/4 pt-8 bg-white rounded-xl h-5/6 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <form className="w-2/3 h-7/12" onSubmit={onSubmit}>
                <ProgressBar progressValue={((currentStepIndex + 1) / steps.length) * 100 + '%'} />
                {step}
                <div className={`flex ${isFirstStep ? 'justify-end' : 'justify-between'} mt-4`}>
                    {!isFirstStep && <button type="button" onClick={back} className="">Retour</button>}
                    {!isLastStep && <button type="submit" className="rounded-2xl bg-[#13005A] text-white text-xs px-5 py-2 ">Suivant</button>}
                    {isLastStep && <button type="submit">Inscrire</button>}
                </div>
            </form >
        </div >
    );
}

export default Formulaire;