import React from 'react'
import { Form, Formik } from "formik"
import * as Yup from 'yup'
import FormsTextInput from './FormsTextInput'
import FormsTextArea from './FormsTextArea'
import FormsSelect from './FormsSelect'
import data from '../data/doctorant_data.json'
const CarteAjoutSiminaire = () => {

    const initialValues = {
        idDoctorant: '',
        titre: '',
        animateur: '',
        resume: '',
    }
    const validationSchema = Yup.object().shape({
        idDoctorant: Yup.string()
            .required('veuillez vous choisir un doctorant.'),
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
    const dropdownOptions = data.map((doctorant) => {
        return {
            label: doctorant.nomPrenom,
            value: doctorant.id
        }
    })

    return (
        <div className=' w-4/6 h-fit px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'
            onClick={e => e.stopPropagation()}
        >
            <div className='flex flex-col w-full py-4 px-5  bg-white rounded-[45px] md:h-full'>
                <h1 className='text-[#03C988] text-xl font-black text-center'>Ajout d’une Siminaire</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    <Form className="w-full mt-10 md:px-14">
                        <h6 className='mb-4 text-sm'>Veuillez remplir les informations du doctorant voulu</h6>
                        <FormsSelect options={dropdownOptions} name='idDoctorant' label='Nom Complet' />
                        <h3 className='mt-3 text-sm text-left'>Information du siminaire a ajouter :</h3>
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

export default CarteAjoutSiminaire