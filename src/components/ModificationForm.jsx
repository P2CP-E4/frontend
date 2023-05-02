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
        FCT: '',
        DirecteurPrincipal: '',
        coDirecteur: '',
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
        directeurPrincipal: Yup.string()
            .required('veuillez remplir ce champ.'),
        coDirecteur: Yup.string()
            .required('veuillez remplir ce champ.'),

    });
    return (
        <>
            <div className='w-3/4 md:h-[400px] px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'>
                <div className='flex flex-col w-full py-3 md:px-16 bg-white rounded-[45px] md:h-full'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                        <Form className="relative grid w-full h-full bg-white md:grid-cols-12 gap-y-4 gap-x-14 auto-rows-min">
                            <div className='  col-span-3'><FormsTextInput name="nom" label="Nom" /></div>
                            <div className='  col-span-3'><FormsTextInput name="prenom" label="Prenom" /></div>
                            <div className='  col-span-3'><FormsDatePicker name="dateNaissance" label="Date de naissance" /></div>
                            <div className='  col-span-3'><FormsSelect name="sexe" label="Sexe" options={dropdownOptions} /></div>
                            <div className='col-span-4'><FormsTextInput name="telephone" label="Telephone" /></div>
                            <div className='col-span-4'><FormsTextInput name="email" label="Email" /></div>
                            <div className='col-span-4'><FormsSelect name="typeDiplome" label="Type du diplome" options={dropdownOptions} /></div>
                            <div className='col-span-4'><FormsSelect name="laboratoire" label="Laboratoire" options={dropdownOptions} /></div>
                            <div className='col-span-4'><FormsSelect name="etablissementOrigine" label="Nom d’Etablissement d’origine " options={dropdownOptions} /></div>
                            <div className='col-span-4'><FormsSelect name="option" label="Option" options={dropdownOptions} /></div>
                            <div className='col-span-4'><FormsDatePicker name="FCT" label="Date Enregistrement FCT" /></div>
                            <div className='col-span-4'><FormsSelect name="directeurPrincipal" label="Directeur Principal" /></div>
                            <div className='col-span-4'><FormsSelect name="coDirecteur" label="Co Directeur" /></div>
                            <button type="submit" className="md:absolute md:bottom-1.5 md:right-1 bg-[#03C988] rounded-3xl text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border hover:border-[#03C988]">Confirmer la modification</button>
                        </Form >
                    </Formik >
                </div>
            </div>
        </>
    )
}

export default ModificationForm