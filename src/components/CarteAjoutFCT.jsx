import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormsTextInput from './FormsTextInput'
import FormsDatePicker from './FormsDatePicker'

const CarteAjoutFCT = () => {
    const initialValues = {
        nom: '',
        prenom: '',
        dateNaissance: '',
        FCT: '',
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
        FCT: Yup.date()
            .required('veuillez remplir ce champ.'),
    });
    return (
        <div className=' w-4/6 h-[450px] px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'
            onClick={e => e.stopPropagation()}
        >
            <div className='flex flex-col w-full py-10 px-5  bg-white rounded-[45px] md:h-full'>
                <h1 className='text-[#03C988] text-xl font-black text-center'>Ajout de la Date d’enregistrement du fichier central</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    <Form className="w-full mt-10 md:px-10">
                        <h6 className='mb-4 text-sm'>Veuillez remplir les informations du doctorant voulu</h6>
                        <div className='mb-6 md:flex md:gap-5'>
                            <div><FormsTextInput name="nom" label="Nom" /></div>
                            <div><FormsTextInput name="prenom" label="Prenom" /></div>
                            <div><FormsDatePicker name="dateNaissance" label="Date de naissance" /></div>
                        </div>
                        <div className='items-center gap-3 mt-10 md:flex'>
                            <h6 className='mt-5 text-sm font-light'>L’Ajout de la Date d’enregistrement du fichier central</h6>
                            <div className=''><FormsDatePicker name="FCT" label="La Date du FCT" /></div>
                        </div>
                        <button type="submit" className="md:ml-[600px] mt-14 rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border border-transparent hover:border-[#03C988]">Confirmer</button>
                    </Form >
                </Formik >
            </div>
        </div >
    )
}

export default CarteAjoutFCT