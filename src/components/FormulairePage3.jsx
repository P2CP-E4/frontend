import React from "react";
import { Formik, Form } from "formik";
import FormsTextInput from "./FormsTextInput";
import * as Yup from "yup";
import FormsDatePicker from "./FormsDatePicker";
import FormsSelect from "./FormsSelect";
import FormsCreatableSelect from "./FormsCreatableSelect";

const FormulairePage3 = ({ data, next, back }) => {
    const dropdownOptions = [
        { value: "LMCS", label: "LMCS - ESI" },
        { value: "LCSI", label: "LCSI - ESI" },
        { value: "autre", label: "autre" },
    ]

    const validationSchema = Yup.object().shape({
        these: Yup.string()
            .min(3, "Min. 3 characters")
            .required("veuillez remplir ce champ."),
        laboratoire: Yup.string()
            .required("veuillez remplir ce champ."),
        premiereInscription: Yup.date()
            .required("veuillez remplir ce champ."),
        dateEnregistrementFCT: Yup.date()
            .required("veuillez remplir ce champ."),
        codePV: Yup.string()
            .required("veuillez remplir ce champ."),
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
                        < Form className="relative flex flex-col items-center w-full h-full">
                            <h2 className="mr-auto ml-40 text-lg font-semibold leading-10 text-[#03C988]">
                                Information de these
                            </h2>
                            <div className="w-4/5 mt-10">
                                <div className="mb-12 -mx-3 md:flex">
                                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                                        <FormsTextInput name="these" label="Intitulé de these" />
                                    </div>
                                    <div className="px-3 mb-6 md:mb-0 md:w-1/2">
                                        <FormsCreatableSelect name="laboratoire" label="Laboratoire" placeholder="" options={dropdownOptions} />
                                    </div>
                                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                                        <FormsDatePicker name="premiereInscription" label="Date de la Première Inscription" />
                                    </div>
                                </div>

                                <div className="mb-6 -mx-3 md:flex">
                                    <div className="px-3 md:w-1/2">
                                        <FormsDatePicker name="dateEnregistrementFCT" label="Date enregistrement FCT" />
                                    </div>
                                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                                        <FormsTextInput name="codePV" label="Code du Procès verbal" />
                                    </div>
                                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                                        <FormsTextInput name="codePV" label="Code du Procès verbal" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="md:absolute md:bottom-10 md:right-12 rounded-3xl bg-[#13005A] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Suivant</button>
                            <button type="button" onClick={() => back(values)} className="md:absolute md:bottom-10 md:left-12 rounded-3xl bg-[#13005A] text-white text-sm px-5 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Retour</button>
                        </Form>
                    )
                }
            </Formik >
        </>
    );
}

export default FormulairePage3;