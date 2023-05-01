import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormsTextArea from './FormsTextArea'
import FormsSelect from './FormsSelect'
import data from '../data/doctorant_data.json'
const CarteAjoutObservation = () => {
    const initialValues = {
        idDoctorant: '',
        observation: ''
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
        observation: Yup.string()
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
        <div className=' w-4/6 h-fit mt-5 px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'
            onClick={e => e.stopPropagation()}
        >
            <div className='flex flex-col w-full pt-4 pb-16 px-5  bg-white rounded-[45px] md:h-full'>
                <h1 className='text-[#03C988] text-xl font-black text-center'>Ajout d’une Observation</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    <Form className="w-full mt-10 md:px-14">
                        <h6 className='mb-4 text-sm'>Veuillez remplir les informations du doctorant voulu</h6>
                        <div className='pr-32'>
                            <FormsSelect options={dropdownOptions} name='idDoctorant' label='Nom Complet' placeholder='enter le nom complet' />
                        </div>
                        <h6 className='my-5 mb-4 text-sm'>Ajout de l’observation</h6>
                        <div className='mr-32'><FormsTextArea name="observation" label="Observation" /></div>
                        <button type="submit" className="md:ml-[600px] mt-6 rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border border-transparent hover:border-[#03C988]">Confirmer</button>
                    </Form >
                </Formik >
            </div>
        </div >
    )
}

export default CarteAjoutObservation