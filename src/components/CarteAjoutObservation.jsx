import React from 'react'
import { Formik, Form } from 'formik'
import SubmitCarte from './SubmitCarte'
import * as Yup from 'yup'
import FormsTextArea from './FormsTextArea'
import FormsSelect from './FormsSelect'
import { useHandleSubmitFormAjouts } from '../hooks/useHandleSubmitFormAjouts'
import { useGetNomCompletDropDownOption } from '../hooks/useGetNomCompletDropDownOptions'
const CarteAjoutObservation = () => {
    const POST_OBSERVATION_URL = 'http://localhost:9000/api/Doctorants/observation';
    const { handleSubmitForm, status, clearStatus } = useHandleSubmitFormAjouts(POST_OBSERVATION_URL);
    const dropDownOptions = useGetNomCompletDropDownOption();

    const initialValues = {
        doctorantId: '',
        observation: ''
    }

    const validationSchema = Yup.object().shape({
        doctorantId: Yup.string()
            .required('veuillez remplir ce champ.'),
        observation: Yup.string()
            .min(10, 'Min. 3 characters')
            .required('veuillez remplir ce champ.'),
    });

    return (
        <div className='relative w-4/6 md:h-[85%] h-fit mt-5 px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'
            onClick={e => e.stopPropagation()}
        >
            <div className='flex flex-col w-full pt-4 pb-16 px-5  bg-white rounded-[45px] md:h-full'>
                {
                    status ? <SubmitCarte state={status} clear={clearStatus} titre={status === 'success' ? 'Ajout avec success' : ' Echec dans l\'ajout'} message={status === 'success' ? "L'ajout de l'observation a été effectuée avec succées." : "Désolé , nous n'avons pas pu enregistrer votre Ajout veuillez réessayez plus tard, ou contacter l'administrateur pour obtenir de l'aide"} />
                        : <>
                            <h1 className='text-[#03C988] text-xl font-black text-center'>Ajout d’une Observation</h1>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmitForm}
                            >
                                <Form className="w-full mt-10 md:px-14">
                                    <h6 className='mb-4 text-sm'>Veuillez remplir les informations du doctorant voulu</h6>
                                    <div className='pr-32'><FormsSelect options={dropDownOptions} name='doctorantId' label='Nom Complet' placeholder='enter le nom complet' /></div>
                                    <h6 className='my-5 mb-4 text-sm'>Ajout de l’observation</h6>
                                    <div className='mr-32'><FormsTextArea name="observation" label="Observation" /></div>
                                    <button type="submit" className="absolute right-12 bottom-5  rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border border-transparent hover:border-[#03C988]">Confirmer</button>
                                </Form >
                            </Formik >
                        </>
                }
            </div>
        </div >
    )
}

export default CarteAjoutObservation