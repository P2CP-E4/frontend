import React from 'react'
import NavBar from '../components/NavBar'
import ModificationForm from '../components/ModificationForm'
import FormsSelect from '../components/FormsSelect'

import { useGetNomCompletDropDownOption } from '../hooks/useGetNomCompletDropDownOptions'
import { Form, Formik } from 'formik'

const ModificationPersonalInfo = () => {
    //TODO:finish l'integration de la modification des infos personnelles
    const dropDownOptions = useGetNomCompletDropDownOption();
    // const onChange = () => {

    // }
    return (
        <div className='relative flex flex-col items-center w-screen h-screen pb-8'>
            <NavBar />
            <h1 className='text-2xl text-center my-3 text-[#03C988]'>Modification Informations personnelles du Doctorant :</h1>
            <h3 className='text-sm text-center '>Veuillez entrer le nom complet du doctorant :</h3>
            <Formik
                initialValues={{
                    nomComplet: '',
                }}>
                <Form>
                    <FormsSelect name='nomComplet' label='enter le nom complet' options={dropDownOptions} />
                </Form>
            </Formik>
            <div className={`w-full flex justify-center mt-4 `}>
                <ModificationForm />
            </div>
        </div >
    )
}

export default ModificationPersonalInfo