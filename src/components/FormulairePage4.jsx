import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormsTextInput from "./FormsTextInput";
import * as Yup from "yup";
import Arrow from "./Arrow"

const FormulairePage4 = ({ data, next, back }) => {
    const [showCoDirecteur, setShowCoDirecteur] = useState(false);
    const handleClickEvent = () => {
        setShowCoDirecteur(!showCoDirecteur);
    }
    const validationSchema = Yup.object().shape({
        nomDirecteur: Yup.string()
            .min(3, "Min. 3 characters")
            .required("veuillez remplir ce champ."),
        etablissementDirecteur: Yup.string()
            .min(3, "Min. 3 characters")
            .required("veuillez remplir ce champ."),
        gradeDirecteur: Yup.string()
            .min(3, "Min. 3 characters")
            .required("veuillez remplir ce champ."),
        nomCoDirecteur: Yup.string()
            .min(3, "Min. 3 characters"),
        etablissementCoDirecteur: Yup.string()
            .min(3, "Min. 3 characters"),
        gradeCoDirecteur: Yup.string()
            .min(3, "Min. 3 characters"),
    })
    const handleSubmitEvent = (values) => {
        next(values);
    }

    return (
        <Formik
            initialValues={data}
            validationSchema={validationSchema}
            onSubmit={handleSubmitEvent}
        >
            {
                ({ values }) => (
                    <Form className="relative flex flex-col items-center w-full h-full">
                        <div className="w-4/5">
                            <h2 className="text-lg font-semibold text-[#03C988] mb-0 ml-16">Information de directeur</h2>
                            <div className="grid grid-cols-3 gap-x-6">
                                <div><FormsTextInput name='nomDirecteur' label='Nom du Directeur' /></div>
                                <div><FormsTextInput name='etablissementDirecteur' label="Nom d'Etablissement du Directeur" /></div>
                                <div><FormsTextInput name='gradeDirecteur' label='Grade du Directeur' /></div>
                                <div><FormsTextInput name='nomDirecteur' label='Etablissement' /></div>
                                <div><FormsTextInput name='etablissementDirecteur' label="Adresse email" /></div>
                                <div><FormsTextInput name='gradeDirecteur' label='N° de telephone' /></div>
                            </div>
                            <div
                                className="cursor-pointer flex items-center w-fit rounded-3xl border border-[#1C82AD] py-1 px-4 my-2 text-sm text-[#13005A]"
                                onClick={handleClickEvent}
                            >
                                Information du Co-directeur <span className="text-[#03C988] pl-1 pr-5">(optionnelle)</span>
                                <Arrow fill='#03C988' className="w-4" state={showCoDirecteur} />
                            </div>
                            {
                                showCoDirecteur && <div className="grid grid-cols-3 gap-x-6">
                                    <div><FormsTextInput name='nomCoDirecteur' label='Nom du Co-Directeur' /></div>
                                    <div><FormsTextInput name='etablissementCoDirecteur' label="Nom d'Etablissement du Co-Directeur" /></div>
                                    <div><FormsTextInput name='gradeCoDirecteur' label='Grade du Co-Directeur' /></div>
                                    <div><FormsTextInput name='nomCoDirecteur' label='Etablissement' /></div>
                                    <div><FormsTextInput name='nomCoDirecteur' label='Adresse email' /></div>
                                    <div><FormsTextInput name='nomCoDirecteur' label='N° de telephone' /></div>
                                </div>
                            }
                        </div >
                        <button type="submit" className="md:absolute  border-transparent md:bottom-10 md:right-12 rounded-3xl bg-[#13005A] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Suivant</button>
                        <button type="button" onClick={() => back(values)} className="md:absolute border-transparent md:bottom-10 md:left-12 rounded-3xl bg-[#13005A] text-white text-sm px-5 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Retour</button>
                    </Form>
                )
            }

        </Formik >
    );
}

export default FormulairePage4;