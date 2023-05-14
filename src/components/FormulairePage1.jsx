import React from "react";
import { Formik, Form } from "formik";
import FormsTextInput from "./FormsTextInput";
import * as Yup from "yup";
import FormsDatePicker from "./FormsDatePicker";
import FormsSelect from "./FormsSelect";
const FormulairePage1 = ({ data, next, sexeDropDownOptions }) => {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object().shape({
        nom: Yup.string()
            .required('veuillez remplir ce champ.'),
        prenom: Yup.string()
            .required('veuillez remplir ce champ.'),
        sexe: Yup.string()
            .required('veuillez remplir ce champ.'),
        dateNaissance: Yup.date()
            .required('veuillez remplir ce champ.'),
        telephone: Yup.string()
            .matches(phoneRegExp, "Le numero de telephone n'est pas valide")
            .required('veuillez remplir ce champ.'),
        email: Yup.string()
            .email('enter un email valid')
            .required('veuillez remplir ce champ.'),
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
            <Form className="relative flex flex-col items-center w-2/3 h-full">
                <h2 className="text-lg font-semibold leading-10 self-start text-[#03C988] mb-2">
                    Informations personnelles
                </h2>
                <div className="w-full  md:grid md:grid-cols-2 md:gap-y-3 md:gap-x-5">
                    <div><FormsTextInput name="nom" label="Nom" /></div>
                    <div><FormsTextInput name="prenom" label="Prenom" /></div>
                    <div><FormsSelect name="sexe" label="Sexe" placeholder="" options={sexeDropDownOptions} /></div>
                    <div><FormsDatePicker name="dateNaissance" label="Date de naissance" /></div>
                    <div><FormsTextInput name="telephone" label="Telephone" /></div>
                    <div><FormsTextInput name="email" label="Email" /></div>
                </div >
                <button type="submit" className="md:absolute border-transparent md:bottom-10 md:-right-[112px] rounded-3xl bg-[#13005A] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Suivant</button>
            </Form >
        </Formik >
    );
};

export default FormulairePage1;
