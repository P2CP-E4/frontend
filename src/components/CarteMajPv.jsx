import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import FormsTextInput from './FormsTextInput';
import FormsCreatableSelect from './FormsCreatableSelect';
import FormsDatePicker from './FormsDatePicker';
import SubmitCarte from './SubmitCarte';
const CarteMajPv = ({ handleCloseEvent }) => {
    const initialValues = {
        _id: '',
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
    const [status, setStatus] = useState('');
    const MajPvRequest = (values) => {
        const MAJ_PV_URL = 'http://localhost:9000/api/PVs/majPV'
        axios.post(MAJ_PV_URL, values)
            .then(res => {
                console.log(res.data)
                setStatus('success');
            })
            .catch(err => {
                console.log(err)
                setStatus('error')
            })
    }

    const [PVs, setPVs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9000/api/PVs/allPV')
            .then(res => setPVs(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div
            className='w-3/5 md:h-[400px] mt-5 px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'
            onClick={e => e.stopPropagation()}
        >
            <div className='flex flex-col w-full py-4 px-5  bg-white rounded-[45px] md:h-full'>
                {status ? (
                    <SubmitCarte
                        state={status}
                        clear={handleCloseEvent}
                        titre={
                            status === "success"
                                ? "Mise à jour avec success"
                                : " Echec dans la mise à jour"
                        }
                        message={
                            status === "success"
                                ? "Mise à jour du proces verbal a été effectuée avec succées."
                                : "Désolé , nous n'avons pas pu enregistrer  Mise à jour du proces verbal veuillez réessayez plus tard, ou contacter l'administrateur pour obtenir de l'aide"
                        }
                    />
                ) : (
                    <>
                        <h1 className='text-[#03C988] text-xl font-black text-center'>Mise à jour du proces verbal</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={MajPvRequest}
                        >
                            {
                                (form) => {
                                    const { setFieldValue } = form;
                                    return <Form className="relative grid w-full mt-10 md:px-14 md:grid-cols-2 md:gap-14 auto-rows-min">
                                        <div>
                                            <FormsCreatableSelect
                                                options={PVs.map(pv => { return { label: pv.code, value: pv.code } })}
                                                name="codePV"
                                                label="Code"
                                                onChange={selectedOption => {
                                                    form.setFieldValue('code', selectedOption.value);
                                                    const PV = PVs.find(pv => pv.code === selectedOption.value);
                                                    if (!PV) {
                                                        setFieldValue('url', '');
                                                        setFieldValue('ordreDuJour', '');
                                                        setFieldValue('date', '');
                                                        return false;
                                                    };
                                                    setFieldValue('url', PV.url);
                                                    setFieldValue('ordreDuJour', PV.ordreDuJour);
                                                    setFieldValue('date', new Date(PV.date));
                                                    setFieldValue('_id', PV._id);
                                                }}
                                            />
                                        </div>
                                        <div><FormsDatePicker name="date" label="Date du proces verbal" /></div>
                                        <div><FormsTextInput name="url" label="Url" /></div>
                                        <div><FormsTextInput name="ordreDuJour" label="Ordre du jour" popperPlacement="left" /></div>
                                        <button type="submit" className="md:absolute  border-transparent md:-bottom-20 md:right-6 rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border hover:border-[#03C988]">Confirmer</button>
                                    </Form >
                                }
                            }
                        </Formik >
                    </>
                )}
            </div>
        </div >
    );
}

export default CarteMajPv