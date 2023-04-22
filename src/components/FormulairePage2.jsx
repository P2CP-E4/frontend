import React from "react";
import { Formik, Form, Field } from "formik";
import FormsTextInput from "./FormsTextInput";
import FormsSelect from "./FormsSelect";
import * as Yup from "yup";

const FormulairePage2 = ({ data, next, back }) => {
    const dropdownOptions = [
        { value: "Master", label: "Mater" },
        { value: "Majister", label: "Majister" },
        { value: "Ingeniorat", label: "Ingeniorat" },
    ]

    const validationSchema = Yup.object().shape({
        typeDiplome: Yup.string().required("veuillez remplir ce champ."),
        etablissementOrigine: Yup.string().required("veuillez remplir ce champ."),
    });
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
                ({ values }) => {
                    return (
                        <Form className="relative flex flex-col items-center w-full h-full">
                            <div className="w-2/3">
                                <h2 className="text-lg font-semibold leading-10 mb-6 text-[#03C988]">
                                    Cursus universitaire
                                </h2>
                                <h6 className="text-xs mb-3 text-[#13005A] ">Type du doctorat : </h6>
                                <div className="flex">
                                    <label className="mr-10 cursor-pointer">
                                        <Field type="radio" name="typeDoctorat" id="typeDoctorat" className="sr-only peer" value="LMD" defaultChecked={true} />
                                        <div className="bg-white rounded-2xl border border-[#1C82AD] px-7 py-1 text-[#898989] text-sm transition-all peer-checked:text-white peer-checked:bg-[#1C82AD]">
                                            LMD
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <Field type="radio" name="typeDoctorat" id="typeDoctorat" className="sr-only peer" value="Classique" />
                                        <div className=" bg-white rounded-2xl border border-[#1C82AD] px-7 py-1 text-[#898989] text-sm transition-all peer-checked:text-white peer-checked:bg-[#1C82AD]">
                                            Classique
                                        </div>
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <FormsSelect name="typeDiplome" placeholder="" label="Type de diplôme" options={dropdownOptions} />
                                </div>
                                <div className="mt-6">
                                    <FormsTextInput name="etablissementOrigine" label="Nom d’Etablissement d’origine" />
                                </div>
                            </div >
                            <button type="submit" className="md:absolute md:bottom-10 md:right-12 rounded-3xl bg-[#13005A] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Suivant</button>
                            <button type="button" onClick={() => back(values)} className="md:absolute md:bottom-10 md:left-12 rounded-3xl bg-[#13005A] text-white text-sm px-5 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Retour</button>
                        </Form>
                    )
                }
            }
        </Formik >
    );
}

export default FormulairePage2;