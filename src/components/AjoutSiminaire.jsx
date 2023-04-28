import React from 'react'
import { Form, Formik } from "formik"
import * as Yup from 'yup'
import FormsTextInput from './FormsTextInput'
import FormsDatePicker from './FormsDatePicker'
import FormsTextArea from './FormsTextArea'
const AjoutSiminaire = () => {
    const initialValues = {
        nom: '',
        prenom: '',
        dateNaissance: '',
        titre: '',
        animateur: '',
        resume: '',
    }
    const validationSchema = Yup.object().shape({
        nom: Yup.string()
            .min(3, 'Min. 3 characters')
            .required('veuillez remplir ce champ.'),
        prenom: Yup.string()
            .min(3, 'Min. 3 characters')
            .required('veuillez remplir ce champ.'),
        dateNaissance: Yup.date()
            .required('veuillez remplir ce champ.'),
        titre: Yup.string()
            .min(3, 'Min. 3 characters')
            .required('veuillez remplir ce champ.'),
        animateur: Yup.string()
            .min(3, 'Min. 3 characters')
            .required('veuillez remplir ce champ.'),
        resume: Yup.string()
            .min(10, 'Min. 3 characters')
            .required('veuillez remplir ce champ.'),
    });
    return (
        <div className=' w-4/6 h-fit px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'>
            <div className='flex flex-col w-full py-4 px-5  bg-white rounded-[45px] md:h-full'>
                <h1 className='text-[#03C988] text-xl font-black text-center'>Ajout d’une Siminaire</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    <Form className="w-full mt-10 md:px-14">
                        <h6 className='mb-4 text-sm'>Veuillez remplir les informations du doctorant voulu</h6>
                        <div className='mb-6 md:flex md:gap-5'>
                            <div><FormsTextInput name="nom" label="Nom" /></div>
                            <div><FormsTextInput name="prenom" label="Prenom" /></div>
                            <div><FormsDatePicker name="dateNaissance" label="Date de naissance" /></div>
                        </div>
                        <h6 className='mb-4 text-sm'>Information du siminaire a ajouter</h6>
                        <div className='mb-6 md:flex md:gap-28'>
                            <div><FormsTextInput name="titre" label="Titre" /></div>
                            <div><FormsTextInput name="animateur" label="Animateur" /></div>
                        </div>
                        <div className='mr-32'><FormsTextArea name="resume" label="Resumé" /></div>
                        <button type="submit" className="md:ml-[600px] mt-6 rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border border-transparent hover:border-[#03C988]">Confirmer</button>
                    </Form >
                </Formik >
            </div>
        </div >
    )
}

export default AjoutSiminaire