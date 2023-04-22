import React from "react";
import { Formik, Form } from "formik";
import FormsTextInput from "./FormsTextInput";
import * as Yup from "yup";
import FormsDatePicker from "./FormsDatePicker";
import FormsSelect from "./FormsSelect";
const FormulairePage1 = ({ data, next }) => {
    const dropdownOptions = [
        { label: "Homme", value: "Homme" },
        { label: "Femme", value: "Femme" },
    ]
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object().shape({
        nom: Yup.string()
            .min(3, 'Min. 3 characters')
            .required('veuillez remplir ce champ.'),
        prenom: Yup.string()
            .min(3, 'Min. 3 characters')
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
            <Form className="relative flex flex-col items-center w-full h-full">
                <div className="w-2/3">
                    <h2 className="text-lg font-semibold leading-10 text-[#03C988] mb-3">
                        Informations personnelles
                    </h2>
                    <div className="mb-6 -mx-3 md:flex">
                        <div className="relative px-4 pb-2 mb-6 md:mb-0 md:w-1/2" >
                            <FormsTextInput name="nom" label="Nom" />
                        </div>
                        <div className="px-3 md:w-1/2">
                            <FormsTextInput name="prenom" label="Prenom" />
                        </div>
                    </div>

                    <div className="mb-6 -mx-3 md:flex">
                        <div className="px-3 mb-6 md:mb-0 md:w-1/2">
                            <FormsSelect name="sexe" label="Sexe" placeholder="" options={dropdownOptions} />
                        </div>
                        <div className="px-3 md:w-1/2">
                            <FormsDatePicker name="dateNaissance" label="Date de naissance" />
                        </div>
                    </div>

                    <div className="mt-6 mb-6 -mx-3 md:flex">
                        <div className="px-3 mb-6 md:mb-0 md:w-1/2">
                            <FormsTextInput name="telephone" label="Telephone" />
                        </div>
                        <div className="px-3 md:w-1/2">
                            <FormsTextInput name="email" label="Email" />
                        </div>
                    </div>
                </div >
                <button type="submit" className="md:absolute md:bottom-10 md:right-12 rounded-3xl bg-[#13005A] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Suivant</button>
            </Form >
        </Formik >
    );
};

export default FormulairePage1;
