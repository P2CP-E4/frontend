import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import FormsTextInput from "./FormsTextInput";
import * as Yup from "yup";
import Arrow from "./Arrow"
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import FormsCreatableSelect from "./FormsCreatableSelect";

const FormulairePage4 = ({ data, handleCoDirecteurExistence, next, back }) => {
    const validationSchema = Yup.object().shape({
        nomDirecteur: Yup.string()
            .required("veuillez remplir ce champ."),
        etablissementDirecteur: Yup.string()
            .required("veuillez remplir ce champ."),
        gradeDirecteur: Yup.string()
            .required("veuillez remplir ce champ."),
        adresseEmailDirecteur: Yup.string()
            .email('enter un email valid')
            .required("veuillez remplir ce champ."),
        telephoneDirecteur: Yup.string()
            .required("veuillez remplir ce champ."),
        isCoDirecteurExist: Yup.boolean(),
        nomCoDirecteur: Yup.string(),
        etablissementCoDirecteur: Yup.string(),
        gradeCoDirecteur: Yup.string(),
        adresseEmailCoDirecteur: Yup.string()
            .email('enter un email valid'),
        telephoneCoDirecteur: Yup.string(),
    })

    const handleSubmitEvent = (values) => {
        next(values);
    }
    const [encadrants, setEncadrants] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9000/api/Encadrants/allEncad')
            .then(res => setEncadrants(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <Formik
            initialValues={data}
            validationSchema={validationSchema}
            onSubmit={handleSubmitEvent}
            enableReinitialize
        >
            {
                (form) => {
                    const { values, setFieldValue } = form;
                    return (
                        <Form className="relative flex flex-col items-center w-full h-full">
                            <div className="w-4/5 h-full">
                                <h2 className="text-lg font-semibold text-[#03C988] ml-16">Information de directeur</h2>
                                <div className="grid-cols-6 md:grid gap-y-2 gap-x-6">
                                    <div className="col-span-2 inline-flex"><FormsCreatableSelect
                                        options={encadrants.map((encadrant) => { return { label: encadrant.nomComplet, value: encadrant.nomComplet } })}
                                        name='nomDirecteur'
                                        placeholder='Nom du Directeur'
                                        onChange={selectedOption => {
                                            form.setFieldValue('nomDirecteur', selectedOption.value)
                                            const encadrant = encadrants.find(encadrant => encadrant.nomComplet === selectedOption.value)
                                            if (!encadrant) {
                                                setFieldValue('etablissementDirecteur', '');
                                                setFieldValue('gradeDirecteur', '');
                                                setFieldValue('adresseEmailDirecteur', '');
                                                setFieldValue('telephoneDirecteur', '');
                                                return false;
                                            };
                                            setFieldValue('etablissementDirecteur', encadrant.etablissement)
                                            setFieldValue('gradeDirecteur', encadrant.grade)
                                            setFieldValue('adresseEmailDirecteur', encadrant.email)
                                            setFieldValue('telephoneDirecteur', encadrant.telephone)
                                        }}
                                    /></div>
                                    <div className="col-span-2"><FormsTextInput name='etablissementDirecteur' placeholder="Nom d'Etablissement du Directeur" /></div>
                                    <div className="col-span-2"><FormsTextInput name='gradeDirecteur' placeholder='Grade du Directeur' /></div>
                                    <div className='col-span-3'><FormsTextInput name='adresseEmailDirecteur' placeholder="Adresse email" /></div>
                                    <div className='col-span-3'><FormsTextInput name='telephoneDirecteur' placeholder='N° de telephone' /></div>
                                </div>
                                <label className="cursor-pointer flex items-center w-fit rounded-3xl border border-[#1C82AD] py-1 px-4 my-2 text-sm text-[#13005A]">
                                    <Field type="checkbox" name="isCoDirecteurExist" className='hidden' />
                                    Information du Co-directeur
                                    <span className="text-[#03C988] pl-1 pr-5">(optionnelle)</span>
                                    <Arrow fill='#03C988' className="w-4" state={values.isCoDirecteurExist} />
                                </label>
                                <AnimatePresence>
                                    {
                                        values.isCoDirecteurExist && <motion.div
                                            className="grid-cols-6 md:grid gap-x-6 gap-y-2"
                                            initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            exit={{ opacity: 0, x: 100, scale: 0.8 }}
                                            transition={{ duration: 0.1 }}
                                        >
                                            <div className="col-span-2 flex"><FormsCreatableSelect
                                                name='nomCoDirecteur'
                                                placeholder='Nom du Directeur'
                                                onChange={selectedOption => {
                                                    form.setFieldValue('nomCoDirecteur', selectedOption.value)
                                                    const encadrant = encadrants.find(encadrant => encadrant.nomComplet === selectedOption.value)
                                                    if (!encadrant) {
                                                        setFieldValue('etablissementCoDirecteur', '');
                                                        setFieldValue('gradeCoDirecteur', '');
                                                        setFieldValue('adresseEmailCoDirecteur', '');
                                                        setFieldValue('telephoneCoDirecteur', '');
                                                        return false;
                                                    };
                                                    setFieldValue('etablissementCoDirecteur', encadrant.etablissement);
                                                    setFieldValue('gradeCoDirecteur', encadrant.grade);
                                                    setFieldValue('adresseEmailCoDirecteur', encadrant.email);
                                                    setFieldValue('telephoneCoDirecteur', encadrant.telephone);
                                                }}
                                                options={encadrants.map((encadrant, index) => { return { label: encadrant.nomComplet, value: encadrant.nomComplet } }
                                                )}
                                            /></div>
                                            <div className='col-span-2'><FormsTextInput name='etablissementCoDirecteur' placeholder="Nom d'Etablissement du Co-Directeur" /></div>
                                            <div className='col-span-2'><FormsTextInput name='gradeCoDirecteur' placeholder='Grade du Co-Directeur' /></div>
                                            <div className='col-span-3'><FormsTextInput name='adresseEmailCoDirecteur' placeholder='Adresse email' /></div>
                                            <div className='col-span-3'><FormsTextInput name='telephoneCoDirecteur' placeholder='N° de telephone' /></div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div >
                            <button type="submit" className="md:absolute  border-transparent md:bottom-10 md:right-12 rounded-3xl bg-[#13005A] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Suivant</button>
                            <button type="button" onClick={() => back(values)} className="md:absolute border-transparent md:bottom-10 md:left-12 rounded-3xl bg-[#13005A] text-white text-sm px-5 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Retour</button>
                        </Form>
                    )
                }
            }
        </Formik >
    );
}

export default FormulairePage4;