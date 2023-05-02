import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormsTextInput from "./FormsTextInput";
import * as Yup from "yup";
import Arrow from "./Arrow"
import { motion, AnimatePresence } from "framer-motion";

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
        adresseEmailDirecteur: Yup.string()
            .email('enter un email valid')
            .min(3, "Min. 3 characters")
            .required("veuillez remplir ce champ."),
        telephoneDirecteur: Yup.string()
            .min(3, "Min. 3 characters")
            .required("veuillez remplir ce champ."),
        nomCoDirecteur: Yup.string()
            .min(3, "Min. 3 characters"),
        etablissementCoDirecteur: Yup.string()
            .min(3, "Min. 3 characters"),
        gradeCoDirecteur: Yup.string()
            .min(3, "Min. 3 characters"),
        adresseEmailCoDirecteur: Yup.string()
            .email('enter un email valid')
            .min(3, "Min. 3 characters"),
        telephoneCoDirecteur: Yup.string()
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
                        <div className="w-4/5 h-full">
                            <h2 className="text-lg font-semibold text-[#03C988] ml-16">Information de directeur</h2>
                            <div className="grid grid-cols-6 gap-x-6">
                                <div className="col-span-2 "><FormsTextInput name='nomDirecteur' label='Nom du Directeur' /></div>
                                <div className="col-span-2"><FormsTextInput name='etablissementDirecteur' label="Nom d'Etablissement du Directeur" /></div>
                                <div className="col-span-2"><FormsTextInput name='gradeDirecteur' label='Grade du Directeur' /></div>
                                <div className='col-span-3'><FormsTextInput name='adresseEmailDirecteur' label="Adresse email" /></div>
                                <div className='col-span-3'><FormsTextInput name='telephoneDirecteur' label='N° de telephone' /></div>
                            </div>
                            <div
                                className="cursor-pointer flex items-center w-fit rounded-3xl border border-[#1C82AD] py-1 px-4 my-2 text-sm text-[#13005A]"
                                onClick={handleClickEvent}
                            >
                                Information du Co-directeur <span className="text-[#03C988] pl-1 pr-5">(optionnelle)</span>
                                <Arrow fill='#03C988' className="w-4" state={showCoDirecteur} />
                            </div>
                            <AnimatePresence>
                                {
                                    showCoDirecteur && <motion.div
                                        className="grid grid-cols-6 gap-x-6"
                                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 100, scale: 0.8 }}
                                        transition={{ duration: 0.1 }}
                                    >
                                        <div className='col-span-2'><FormsTextInput name='nomCoDirecteur' label='Nom du Co-Directeur' /></div>
                                        <div className='col-span-2'><FormsTextInput name='etablissementCoDirecteur' label="Nom d'Etablissement du Co-Directeur" /></div>
                                        <div className='col-span-2'><FormsTextInput name='gradeCoDirecteur' label='Grade du Co-Directeur' /></div>
                                        <div className='col-span-3'><FormsTextInput name='adresseEmailCoDirecteur' label='Adresse email' /></div>
                                        <div className='col-span-3'><FormsTextInput name='telephoneCoDirecteur' label='N° de telephone' /></div>
                                    </motion.div>
                                }
                            </AnimatePresence>
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