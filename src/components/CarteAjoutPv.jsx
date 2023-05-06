import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import FormsTextInput from './FormsTextInput';
import FormsDatePicker from './FormsDatePicker';

const CarteAjoutPv = ({ operation, customSubmitRequest }) => {
    const initialValues = {
        code: '',
        url: '',
        ordreDuJour: '',
        date: '',
    }
    const validationSchema = Yup.object().shape({
        code: Yup.string()
            .required('veuillez remplir ce champ.'),
        url: Yup.string()
            .required('veuillez remplir ce champ.'),
        ordreDuJour: Yup.string()
            .required('veuillez remplir ce champ.'),
        date: Yup.date()
            .required('veuillez remplir ce champ.'),
    });

    const ajoutPvRequest = (values) => {
        const POST_PV_URL = 'http://localhost:8080/api/PVs/ajouter'
        axios.post(POST_PV_URL, values)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    console.log(operation)
    return (
        <div
            className='w-3/5 md:h-[400px] mt-5 px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'
            onClick={e => e.stopPropagation()}
        >
            <div className='flex flex-col w-full py-4 px-5  bg-white rounded-[45px] md:h-full'>
                <h1 className='text-[#03C988] text-xl font-black text-center'>{`Information du proces verbal ${operation ? (`de ${operation}`) : ''}`}</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={customSubmitRequest || ajoutPvRequest}
                >
                    <Form className="relative grid w-full mt-10 md:px-14 md:grid-cols-2 md:gap-14 auto-rows-min">
                        <div><FormsTextInput name="code" label="Code" /></div>
                        <div><FormsTextInput name="url" label="Url" /></div>
                        <div><FormsTextInput name="ordreDuJour" label="Ordre du jour" popperPlacement="left" /></div>
                        <div><FormsDatePicker name="date" label="Date du proces verbal" /></div>
                        <button type="submit" className="md:absolute  border-transparent md:-bottom-20 md:right-6 rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border hover:border-[#03C988]">Confirmer</button>
                    </Form >
                </Formik >

            </div>
        </div >
    );
}

export default CarteAjoutPv