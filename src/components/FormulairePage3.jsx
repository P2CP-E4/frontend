import React from "react";
import { Formik, Form } from "formik";
import FormsTextInput from "./FormsTextInput";
import * as Yup from "yup";
import FormsDatePicker from "./FormsDatePicker";
import FormsCreatableSelect from "./FormsCreatableSelect";

const FormulairePage3 = ({ data, next, back, laboDropDownOptions, optionDropDownOptions }) => {
    const validationSchema = Yup.object().shape({
        these: Yup.string()
            .required("veuillez remplir ce champ."),
        laboratoire: Yup.string(),
        premiereInscription: Yup.date(),
        option: Yup.string(),
    })

    const handleSubmitEvent = (values) => {
        next(values);
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
                            <Form className="relative w-full h-full md:px-40 md:gap-y-10 md:gap-x-10 md:auto-rows-min md:grid"
                                style={{
                                    gridTemplateColumns: "60% 40%",
                                }}
                            >
                                <h2 className=" md:col-span-2 text-lg font-semibold text-left leading-10 text-[#03C988] mb-6">
                                    Information de these
                                </h2>
                                <div className=""><FormsTextInput name="these" label="Intitulé de these" /></div>
                                <div className="md:ml-8"><FormsCreatableSelect name="laboratoire" label="Laboratoire" placeholder="" options={laboDropDownOptions} /></div>
                                <div className="md:mr-20"><FormsDatePicker name="premiereInscription" label="Date de la Première Inscription" showYearPicker /></div>
                                <div className=""><FormsCreatableSelect name="option" label="option" placeholder="" options={optionDropDownOptions} /></div>
                                <button type="submit" className="md:absolute  border-transparent md:bottom-10 md:right-12 rounded-3xl bg-[#13005A] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Suivant</button>
                                <button type="button" onClick={() => back(values)} className="md:absolute border-transparent md:bottom-10 md:left-12 rounded-3xl bg-[#13005A] text-white text-sm px-5 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Retour</button>
                            </Form>
                        </>
                    )
                }
            </Formik >
        </>
    );
}

export default FormulairePage3;