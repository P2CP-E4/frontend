import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import ModificationForm from '../components/ModificationForm'
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
        const DOCTORANT_INFORMATIONS_URL = `http://localhost:9000/api/Doctorants/doctorantParId/${selectedOption.value}`;
        axios.get(DOCTORANT_INFORMATIONS_URL)
            .then(res => {
                const { __v, _id, ...rest } = res.data;
                rest.id = _id;
                rest.dateNaissance = new Date(rest.dateNaissance);
                setEditedDoctorantInformations(rest);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='relative flex flex-col items-center w-screen h-screen pb-8'>
            <NavBar />
            <SousPagesController sousPages={sousPages} initialPage={3} />
            <h3 className='text-sm text-center '>Veuillez entrer le nom complet du doctorant :</h3>
            <Formik
                initialValues={{
                    nomComplet: '',
                }}>
                <Form className='w-1/3'>
                    <FormsSelect name='nomComplet' options={dropDownOptions} onChange={handleChangeEvent} />
                </Form>
            </Formik>
            <div className={`w-full flex justify-center mt-4 ${editedDoctorantInformations ? '' : 'grayscale'}`}>
                <ModificationForm newData={editedDoctorantInformations} />
            </div>
        </div >
    )
}

export default ModificationPersonalInfo