import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormsTextInput from './FormsTextInput'
import FormsDatePicker from './FormsDatePicker'
import FormsSelect from './FormsSelect'
const ModificationForm = () => {
    const dropdownOptions = [
        { label: "Homme", value: "Homme" },
        { label: "Femme", value: "Femme" },
    ]
    const initialValues = {
        nom: '',
        prenom: '',
        sexe: '',
        dateNaissance: '',
        telephone: '',
        email: '',
        typeDiplome: '',
        laboratoire: '',
        etablissementOrigine: '',
        option: '',
        FCT: ''
    }
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
        typeDiplome: Yup.string()
            .required('veuillez remplir ce champ.'),
        laboratoire: Yup.string()
            .required('veuillez remplir ce champ.'),
        etablissementOrigine: Yup.string()
            .required('veuillez remplir ce champ.'),
        option: Yup.string()
            .required('veuillez remplir ce champ.'),
        nomDirecteur: Yup.string()
            .required('veuillez remplir ce champ.'),
        nomCoDirecteur: Yup.string()
            .required('veuillez remplir ce champ.'),

    });
    return (
        <>
            <div className='w-3/4 md:h-[430px] mt-5 px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'>
                <div className='flex flex-col w-full pt-8 md:px-20 bg-white rounded-[45px] md:h-full'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                        <Form className="relative grid w-full h-full bg-white md:grid-cols-3 gap-y-4 gap-x-14 auto-rows-min">
                            <div><FormsTextInput name="nom" label="Nom" /></div>
                            <div><FormsTextInput name="prenom" label="Prenom" /></div>
                            <div><FormsDatePicker name="dateNaissance" label="Date de naissance" /></div>
                            <div><FormsSelect name="sexe" label="Sexe" options={dropdownOptions} /></div>
                            <div><FormsTextInput name="telephone" label="Telephone" /></div>
                            <div><FormsTextInput name="email" label="Email" /></div>
                            <div><FormsSelect name="typeDiplome" label="Type du diplome" options={dropdownOptions} /></div>
                            <div><FormsSelect name="laboratoire" label="Laboratoire" options={dropdownOptions} /></div>
                            <div><FormsSelect name="etablissementOrigine" label="Nom d’Etablissement d’origine " options={dropdownOptions} /></div>
                            <div><FormsSelect name="option" label="Option" options={dropdownOptions} /></div>
                            <div><FormsDatePicker name="FCT" label="Date Enregistrement FCT" /></div>
                            {/* <div><FormsTextInput name="nomDirecteur" label="Nom du Directeur" /></div> */}
                            {/* <div><FormsTextInput name="nomCoDirecteur" label="Nom du Co-Directeur" /></div> */}
                            <button type="submit" className="md:absolute md:bottom-6  md:-right-8 bg-[#03C988] rounded-3xl text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border hover:border-[#03C988]">Confirmer la modification</button>
                        </Form >
                    </Formik >
                </div>
            </div>
        </>
    )
}

export default ModificationForm