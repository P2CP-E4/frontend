import React from 'react'
import { Formik, Form } from 'formik'
import FormsSelect from './FormsSelect';
import { useGetDropDownOptions } from '../hooks/useGetDropDownOptions';

const GenererStatsNumerique = () => {
    const { sexeDropDownOptions, typeDiplomeDropDownOptions, laboDropDownOptions, optionDropDownOptions } = useGetDropDownOptions();
    const typeDoctoratDropDownOptions = [
        { value: 'LMD', label: 'LMD' },
        { value: 'Classique', label: 'Classique' },
    ]
    return (
        <Formik
            initialValues={{
                status: '',
                option: '',
                typeDiplome: '',
                typeDoctorat: '',
                laboratoire: '',
                sexe: '',
            }}
        >
            <Form className=' w-11/12 my-5 flex flex-col justify-center items-center h-fit shadow-xl rounded-xl bg-white p-6'>
                <div className='flex gap-4 w-full justify-center mb-5'>
                    <div><FormsSelect name='status' label='Status' options={typeDoctoratDropDownOptions} /></div>
                    <div><FormsSelect name='option' label='Option' options={optionDropDownOptions} /></div>
                    <div><FormsSelect name='typeDiplome' label='Type de diplome' options={typeDiplomeDropDownOptions} /></div>
                    <div><FormsSelect name='typeDoctorat' label='Type du doctorat' options={typeDoctoratDropDownOptions} /></div>
                    <div><FormsSelect name='laboratoire' label='Laboratoire' options={laboDropDownOptions} /></div>
                    <div><FormsSelect name='sexe' label='Sexe' options={sexeDropDownOptions} /></div>
                </div>
                <div className='flex h-fit w-full'>
                    <span className='flex items-center gap-2 ml-auto'>
                        <p className='text-center'>Nombre de doctorants correspondant ces criteres :</p>
                        <h1 className='bg-[#79E4B180] text-center rounded-lg px-6 py-2'>65</h1>
                    </span>
                    <button className='bg-[#03C988] ml-auto text-white rounded-full hover:bg-white hover:text-[#03C988] border-1 border-transparent hover:border-[#03C988] px-4'>Générer</button>
                </div>
            </Form>
        </Formik >
    )
}

export default GenererStatsNumerique