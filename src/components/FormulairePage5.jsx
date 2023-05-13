import React, { useState, useEffect } from 'react'
import { Formik, Form } from "formik";
import FormsTextInput from "./FormsTextInput";
import FormsDatePicker from "./FormsDatePicker";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import FormsCreatableSelect from './FormsCreatableSelect';
import axios from 'axios';

const FormulairePage5 = ({ data, next, back }) => {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        codePV: Yup.string()
            .required("veuillez remplir ce champ."),
        urlPV: Yup.string(),
        ordreDuJour: Yup.string(),
        dateDuJour: Yup.date()
            .required("veuillez remplir ce champ."),
    })

    const handleSubmitEvent = (values) => {
        next(values, true);
        navigate('/acceuil')
    }
    const [PVs, setPVs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9000/api/PVs/allPV')
            .then(res => setPVs(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Formik
            initialValues={data}
            validationSchema={validationSchema}
            onSubmit={handleSubmitEvent}
        >
            {
                (form) => {
                    const { values, setFieldValue } = form;
                    return (
                        <Form className="relative w-full h-full md:px-40 md:gap-y-10 md:gap-x-10 md:auto-rows-min md:grid md:grid-cols-2">
                            <h2 className=" md:col-span-2 text-lg font-semibold text-left leading-10 text-[#03C988] mb-6">
                                Information du proces verbal
                            </h2>
                            <div>
                                <FormsCreatableSelect
                                    options={PVs.map(pv => { return { label: pv.code, value: pv.code } })}
                                    name="codePV"
                                    label="Code"
                                    onChange={selectedOption => {
                                        form.setFieldValue('codePV', selectedOption.value);
                                        const PV = PVs.find(pv => pv.code === selectedOption.value);
                                        if (!PV) {
                                            setFieldValue('urlPV', '');
                                            setFieldValue('ordreDuJour', '');
                                            setFieldValue('dateDuJour', '');
                                            return false;
                                        };
                                        setFieldValue('urlPV', PV.url);
                                        setFieldValue('ordreDuJour', PV.ordreDuJour);
                                        setFieldValue('dateDuJour', new Date(PV.date));
                                    }}
                                />
                            </div>
                            <div><FormsDatePicker name="dateDuJour" label="Date du proces verbal" /></div>
                            <div><FormsTextInput name="urlPV" label="Url (optionnelle)" /></div>
                            <div><FormsTextInput name="ordreDuJour" label="Ordre du jour (optionnelle)" /></div>
                            <button type="submit" className="md:absolute border-transparent md:bottom-10 md:right-12 bg-[#03C988] rounded-3xl text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border hover:border-[#03C988]">Inscrire</button>
                            <button type="button" onClick={() => back(values)} className="md:absolute border-transparent md:bottom-10 md:left-12 rounded-3xl bg-[#13005A] text-white text-sm px-5 py-2 hover:bg-white hover:text-[#13005A] border hover:border-[#13005A]">Retour</button>
                        </Form>
                    )
                }
            }
        </Formik >
    )
}

export default FormulairePage5