import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormsDatePicker from './FormsDatePicker'
import FormsSelect from './FormsSelect'
import SubmitCarte from './SubmitCarte'
import { useHandleSubmitFormAjouts } from '../hooks/useHandleSubmitFormAjouts'
import { useGetNomCompletDropDownOption } from '../hooks/useGetNomCompletDropDownOptions'

const CarteAjoutFCT = () => {
    const POST_FCT_URL = 'http://localhost:9000/api/Doctorants/majFCT';
    const { handleSubmitForm, status, clearStatus } = useHandleSubmitFormAjouts(POST_FCT_URL);

    const dropDownOptions = useGetNomCompletDropDownOption();

    const initialValues = {
        doctorantId: '',
        FCT: '',
    }

    const validationSchema = Yup.object().shape({
        doctorantId: Yup.string()
            .required('veuillez remplir ce champ.'),
        FCT: Yup.date()
            .required('veuillez remplir ce champ.'),
    });

    return (
        <div className='relative w-4/6 md:h-[80%] h-fit mt-5 px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'
            onClick={e => e.stopPropagation()}
        >
            <div className='flex flex-col w-full justify-between bg-white rounded-[45px] md:h-full'>
                {
                    status ? <SubmitCarte state={status} clear={clearStatus} titre={status === 'success' ? 'Ajout avec succès' : ' Echec dans l\'ajout'} message={status === 'success' ? "L'ajout de FCT a été effectuée avec succès." : "Désolé , nous n'avons pas pu enregistrer votre Ajout veuillez réessayez plus tard, ou contacter l'administrateur pour obtenir de l'aide"} />
                        : <>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmitForm}
                            >
                                <Form className="w-full mt-10 md:px-10">
                                    <h6 className='mb-4 text-sm'>Veuillez remplir les informations du doctorant voulu</h6>
                                    <FormsSelect options={dropDownOptions} name='doctorantId' label='Nom Complet' />

                                    <div className='items-center gap-3 mt-10 md:flex'>
                                        <h6 className='mt-5 text-sm font-light'>L’Ajout de la Date d’enregistrement du fichier central</h6>
                                        <div className=''><FormsDatePicker name="FCT" label="La Date du FCT" /></div>
                                    </div>
                                    <button type="submit" className="absolute right-12 bottom-5  rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border border-transparent hover:border-[#03C988]">Confirmer</button>
                                </Form >
                            </Formik >
                        </>
                }
            </div>
        </div >
    )
}

export default CarteAjoutFCT