import React from 'react'
import { Formik, Form } from "formik";
import FormsTextInput from "./FormsTextInput";
import FormsDatePicker from "./FormsDatePicker";
import * as Yup from "yup";

const FormulairePage5 = ({ data, next, back }) => {
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
        next(values, true);
    }
    return (
        <>
            <Formik
                initialValues={data}
                validationSchema={validationSchema}
                onSubmit={handleSubmitEvent}
            >
                {
                    ({ values }) => (
                        <>
                            <Form className="relative w-full h-full md:px-40 md:gap-y-10 md:gap-x-10 md:auto-rows-min md:grid md:grid-cols-2"
                            >
                                <h2 className=" md:col-span-2 text-lg font-semibold text-left leading-10 text-[#03C988] mb-6">
                                    Information du proces verbal
                                </h2>
                                <div><FormsTextInput name="codePV" label="Code" /></div>
                                <div><FormsTextInput name="urlPV" label="Url" /></div>
                                <div><FormsDatePicker name="ordreDuJour" label="Ordre du jour" /></div>
                                <div><FormsDatePicker name="dateDuJour" label="Date du proces verbal" /></div>
                                <button type="submit" className="md:absolute border-transparent md:bottom-10 md:right-12 bg-[#03C988] rounded-3xl text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border hover:border-[#03C988]">Inscrire</button>
                                <button type="button" onClick={() => back(values)} className="md:absolute border-transparent md:bottom-10 md:left-12 rounded-3xl bg-[#13005A] text-white text-sm px-5 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Retour</button>
                            </Form>
                        </>
                    )
                }
            </Formik >
        </>

    )
}

export default FormulairePage5