import React from "react";
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
            nom: '',
            prenom: '',
            sexe: '',
            dateNaissance: '',
            telephone: '',
            email: '',
            LmdOuClassique: '',
            typeDiplome: '',
            etablissementOrigine: '',
            these: '',
            laboratoire: '',
            premiereInscription: '',
            dateEnregistrementFCT: '',
            codePV: '',
            nomDirecteur: '',
            etablissementDirecteur: '',
            gradeDirecteur: '',
            nomCoDirecteur: '',
            etablissementCoDirecteur: '',
            gradeCoDirecteur: ''
        },
        validationSchema: Yup.object({
            nom: Yup.string().min(3, 'Min. 3 characters').required(),
            prenom: Yup.string().min(3, 'Min. 3 characters').required(),
            sexe: Yup.string().required(),
            dateNaissance: Yup.boolean().required(),
            telephone: Yup.string().required(),
            email: Yup.string().email('enter un email valid').required(),
            LmdOuClassique: Yup.string().required(),
            typeDiplome: Yup.string().required(),
            etablissementOrigine: Yup.string().required(),
            these: Yup.string().required(),
            laboratoire: Yup.string().required(),
            premiereInscription: Yup.string().required(),
            dateEnregistrementFCT: Yup.string().required(),
            codePV: Yup.string().required(),
            nomDirecteur: Yup.string().required(),
            etablissementDirecteur: Yup.string().required(),
            gradeDirecteur: Yup.string().required(),
            nomCoDirecteur: Yup.string().required(),
            etablissementCoDirecteur: Yup.string().required(),
            gradeCoDirecteur: Yup.string().required()
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    })

    const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } = useMultiStepForm([
        <FormulairePage1 key="1" formik={formik} />,
        <FormulairePage2 key="2" formik={formik} />,
        <FormulairePage3 key="3" formik={formik} />,
        <FormulairePage4 key="4" formik={formik} />
    ]);
    const onSubmit = (e) => {
        e.preventDefault();
        if (isLastStep)
            formik.handleSubmit();
        else
            next();
    }

    console.log(formik.values);
    return (
        <div className="flex flex-col items-center w-3/4 pt-8 bg-white rounded-xl md:h-5/6 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <ProgressBar progressValue={((currentStepIndex + 1) / steps.length) * 100 + '%'} />
            <form onSubmit={onSubmit} className="relative flex flex-col items-center w-full h-full">
                {step}
                <div className={`w-full px-14 flex ${isFirstStep ? 'justify-end' : 'justify-between'} mb-10 md:absolute md:bottom-0`}>
                    {!isFirstStep && <button type="button" onClick={back} className="rounded-3xl bg-[#13005A] text-white text-sm px-5 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Retour</button>}
                    {!isLastStep && <button type="submit" className=" rounded-3xl bg-[#13005A] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Suivant</button>}
                    {isLastStep && <button type="button" className="bg-[#03C988] rounded-3xl text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border hover:border-[#03C988]">Inscrire</button>}
                </div>
            </form >
        </div >
    );
}

export default Formulaire;