import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import CarteChangementThese from '../components/CarteChangementThese'
import FormsSelect from '../components/FormsSelect'
import { useGetNomCompletDropDownOption } from '../hooks/useGetNomCompletDropDownOptions'
import { Form, Formik } from 'formik'
import axios from 'axios'
import SousPagesController from '../components/SousPagesController'

const ModificationPersonalInfo = () => {
    const sousPages = [
        {
            id: 1,
            title: 'Modification du Status',
            path: '/modificationStatus'
        },
        {
            id: 2,
            title: 'Changement du titre de these',
            path: '/changementThese'
        },
        {
            id: 3,
            title: 'Modification des informations personnelles des doctorants',
            path: '/modificationPersonnelInformations'
        },
    ]

    const dropDownOptions = useGetNomCompletDropDownOption();

    const [editedDoctorantInformations, setEditedDoctorantInformations] = useState(null);

    const handleChangeEvent = (selectedOption) => {
        const THESE_URL = `http://localhost:9000/api/Doctorants/recupIntituleeThese/${selectedOption.value}`;
        axios.get(THESE_URL)
            .then(res => {
                setEditedDoctorantInformations(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='relative flex flex-col items-center w-screen h-screen pb-8'>
            <NavBar />
            <SousPagesController sousPages={sousPages} initialPage={2} />
            <h3 className='text-sm text-center '>Veuillez entrer le nom complet du doctorant voulu :</h3>
            <Formik
                initialValues={{
                    nomComplet: '',
                }}>
                <Form className='w-1/3'>
                    <FormsSelect name='nomComplet' label='enter le nom complet' options={dropDownOptions} onChange={handleChangeEvent} />
                </Form>
            </Formik>
            <div className={`w-full flex justify-center mt-4 ${editedDoctorantInformations ? '' : 'grayscale'}`}>
                <CarteChangementThese data={editedDoctorantInformations} />
            </div>
        </div >
    )
}

export default ModificationPersonalInfo