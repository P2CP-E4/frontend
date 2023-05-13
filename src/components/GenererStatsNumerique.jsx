import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import FormsSelect from './FormsSelect';

const GenererStatsNumerique = () => {
    const sexeDropDownOptions = [
        { value: '', label: 'Tous choix' },
        { value: 'M', label: 'Homme' },
        { value: 'F', label: 'Femme' },
    ]
    const laboDropDownOptions = [
        { value: '', label: 'Tous choix' },
        { value: 'LMCS', label: 'LMCS' },
        { value: 'LCSI', label: 'LCSI' },
    ]
    const typeDiplomeDropDownOptions = [
        { value: '', label: 'Tous les choix' },
        { value: "Master", label: "Master" },
        { value: "Magister", label: "Magister" },
        { value: "Ingeniorat", label: "Ingeniorat" },
    ]
    const typeDoctoratDropDownOptions = [
        { value: '', label: 'Tous les choix' },
        { value: 'LMD', label: 'LMD' },
        { value: 'Classique', label: 'Classique' },
    ]
    const statusDropDownOptions = [
        { value: '', label: 'Tous les choix' },
        { value: 'inscrit', label: 'inscrit' },
        { value: 'radie', label: 'radie' },
        { value: 'soutenu', label: 'soutenu' },
        { value: 'differe', label: 'differe' },
    ]
    const optionDropDownOptions = [
        { value: '', label: 'Tous les choix' },
        { value: 'SIQ', label: 'SIQ' },
        { value: 'SI', label: 'SI' },
    ]

    const [filteringResult, setFilteringResult] = useState(0);
    return (
        <Formik
            initialValues={{
                sexe: '',
                status: '',
                date1: '',
                date2: '',
                laboratoire: '',
                option: '',
                typeDoctorat: '',
                typeDiplome: '',

            }}

            onSubmit={values => {
                axios.get('http://localhost:9000/api/Statistiques/filtre', { params: values })
                    .then(res => setFilteringResult(res.data?.count))
                    .catch(err => console.log(err))
            }}
        >
            <Form className='flex flex-col items-center justify-center w-11/12 p-6 my-5 bg-white shadow-xl h-fit rounded-xl'>
                <h2 className='self-start mb-5 text-lg text-black ml-14 font-semi bold'>Generer une representation numerique</h2>
                <div className='flex justify-center w-full gap-5 mb-5'>
                    <div><FormsSelect name='status' label='Status' options={statusDropDownOptions} /></div>
                    <div><FormsSelect name='option' label='Option' options={optionDropDownOptions} /></div>
                    <div><FormsSelect name='typeDiplome' label='Type de diplome' options={typeDiplomeDropDownOptions} /></div>
                    <div><FormsSelect name='typeDoctorat' label='Type du doctorat' options={typeDoctoratDropDownOptions} /></div>
                    <div><FormsSelect name='laboratoire' label='Laboratoire' options={laboDropDownOptions} /></div>
                    <div><FormsSelect name='sexe' label='Sexe' options={sexeDropDownOptions} /></div>
                </div>
                <div className='flex items-center justify-around w-full h-fit'>
                    <div className='flex flex-col items-center'>
                        <DatePickerHere name='date1' label='date 1' />
                        <DatePickerHere name='date2' label='date 2' />
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-center'>Nombre de doctorants correspondant ces criteres :</p>
                        <span className='bg-[#79E4B180] text-center rounded-lg px-6 py-2 w-fit h-fit'>{filteringResult}</span>
                    </div>
                    <button
                        className='bg-[#03C988] h-fit w-fit p-2 text-white rounded-full hover:bg-white border-2 hover:border-[#03C988] hover:text-[#03C988] border-1 border-transparent hover:border-[#03C988] px-4'
                        type='submit'
                    >Générer
                    </button>
                </div>
            </Form>
        </Formik >
    )
}

export default GenererStatsNumerique;



const DatePickerHere = ({ name, label, ...rest }) => {
    return <div className='flex items-center gap-3'>
        <label
            className="mb-2 text-xs tracking-wide text-[#13005A]"
            htmlFor={name}
        >
            {label}:
        </label>
        <Field>
            {
                ({ form }) => {
                    return (
                        <input
                            className='m-1 border border-[#03C988] text-[#03C988] p-[2px] rounded-sm hover:cursor-pointer'
                            type="date"
                            name={name}
                            id={name}
                            value={form.values[name] || ''}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            {...rest}
                        />
                    )
                }
            }
        </Field>
    </div>
}