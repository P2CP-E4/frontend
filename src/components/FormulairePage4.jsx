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
            .min(3, "Min. 3 characters")
            .required("veuillez remplir ce champ."),
        etablissementCoDirecteur: Yup.string()
            .min(3, "Min. 3 characters")
            .required("veuillez remplir ce champ."),
        gradeCoDirecteur: Yup.string()
            .min(3, "Min. 3 characters")
            .required("veuillez remplir ce champ."),
    })
    const handleSubmitEvent = (values) => {
        next(values, true);
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
                        <h2 className="mr-auto ml-40 text-lg font-semibold leading-10  text-[#03C988]">
                            Information de directeur
                        </h2>
                        <div className="w-4/5 mt-10">
                            <div className="mb-12 -mx-3 md:flex">
                                <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                                    <FormsTextInput name='nomDirecteur' label='Nom du Directeur' />
                                </div>
                                <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                                    <FormsTextInput name='etablissementDirecteur' label="Nom d'Etablissement du Directeur" />
                                </div>
                                <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                                    <FormsTextInput name='gradeDirecteur' label='Grade du Directeur' />
                                </div>
                            </div>

                            <div
                                className="cursor-pointer flex items-center w-fit rounded-3xl border border-[#1C82AD] py-1 px-4 mb-2 text-sm text-[#13005A]"
                                onClick={handleClickEvent}
                            >
                                Information du Co-directeur <span className="text-[#03C988] pl-1 pr-5">(optionnelle)</span>
                                <Arrow fill='#03C988' className="w-4" state={showCoDirecteur} />
                            </div>
                            {
                                showCoDirecteur && <div className="mt-5 mb-12 -mx-3 md:flex">
                                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                                        <FormsTextInput name='nomCoDirecteur' label='Nom du Co-Directeur' />
                                    </div>
                                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                                        <FormsTextInput name='etablissementCoDirecteur' label="Nom d'Etablissement du Co-Directeur" />
                                    </div>
                                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                                        <FormsTextInput name='gradeCoDirecteur' label='Grade du Co-Directeur' />
                                    </div>
                                </div>
                            }
                        </div >
                        <button type="submit" className="md:absolute md:bottom-10 md:right-12 bg-[#03C988] rounded-3xl text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border hover:border-[#03C988]">Inscrire</button>
                        <button type="button" onClick={() => back(values)} className="md:absolute md:bottom-10 md:left-12 rounded-3xl bg-[#13005A] text-white text-sm px-5 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Retour</button>
                    </Form>
                )
            }

        </Formik >
    );
}

export default FormulairePage4;