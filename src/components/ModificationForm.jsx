import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import FormsTextInput from './FormsTextInput'
import FormsDatePicker from './FormsDatePicker'
import FormsSelect from './FormsSelect'
import { useGetDropDownOptions } from '../hooks/useGetDropDownOptions'
const ModificationForm = ({ newData }) => {

    const [formValues, setFormValues] = useState(null);

    useEffect(() => {
        setFormValues(newData);
    }, [newData]);

    const initialValues = {
        nom: '',
        prenom: '',
        sexe: '',
        dateNaissance: null,
        telephone: '',
        email: '',
        typeDiplome: '',
        etablissementOrigine: '',
        laboratoire: '',
        option: '',
    }

    const { sexeDropDownOptions, typeDiplomeDropDownOptions, laboDropDownOptions, optionDropDownOptions } = useGetDropDownOptions();

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
    });
    const handleSubmitEvent = (values) => {

        const UPDATE_DOCTORANT_URL = `http://localhost:9000/api/Doctorants/modifierInfoDoc`
        console.log(UPDATE_DOCTORANT_URL)
        axios.put(UPDATE_DOCTORANT_URL, values)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className='w-3/4 md:h-[330px] px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'>
                <div className='flex flex-col w-full py-3 md:px-16 bg-white rounded-[45px] md:h-full'>
                    <Formik
                        initialValues={formValues || initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmitEvent}
                        enableReinitialize
                    >
                        <Form className="relative grid w-full h-full bg-white md:grid-cols-12 gap-y-4 gap-x-14 auto-rows-min">
                            <div className='col-span-3'><FormsTextInput name="nom" label="Nom" /></div>
                            <div className='col-span-3'><FormsTextInput name="prenom" label="Prenom" /></div>
                            <div className='col-span-3 '><FormsDatePicker name="dateNaissance" label="Date de naissance" /></div>
                            <div className='col-span-3 '><FormsSelect name="sexe" label="Sexe" options={sexeDropDownOptions} /></div>
                            <div className='col-span-4'><FormsTextInput name="telephone" label="Telephone" /></div>
                            <div className='col-span-4'><FormsTextInput name="email" label="Email" /></div>
                            <div className='col-span-4'><FormsSelect name="typeDiplome" label="Type du diplome" options={typeDiplomeDropDownOptions} /></div>
                            <div className='col-span-4'><FormsSelect name="laboratoire" label="Laboratoire" options={laboDropDownOptions} /></div>
                            <div className='col-span-4'><FormsTextInput name="etablissementOrigine" label="Nom d’Etablissement d’origine " /></div>
                            <div className='col-span-4'><FormsSelect name="option" label="Option" options={optionDropDownOptions} /></div>
                            <button type="submit" className="md:absolute md:bottom-1.5 md:right-0 bg-[#03C988] rounded-3xl text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border border-transparent hover:border-[#03C988]">Confirmer la modification</button>
                        </Form >
                    </Formik >
                </div>
            </div>
        </>
    )
}

export default ModificationForm