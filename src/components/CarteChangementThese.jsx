import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormsTextInput from './FormsTextInput'
import FormsDatePicker from './FormsDatePicker'
import FormsCreatableSelect from './FormsCreatableSelect'
import axios from 'axios'
import SubmitCarte from './SubmitCarte'
const CarteChangementThese = ({ data }) => {
  const initialValues = {
    nouveauIntituleThese: '',
    codePv: '',
    urlPv: '',
    ordreDuJour: '',
    datePv: null,
  }
  const validationSchema = Yup.object().shape({
    nouveauIntituleThese: Yup.string()
      .min(3, 'Min. 3 characters')
      .required('veuillez remplir ce champ.'),
    codePv: Yup.string()
      .min(3, 'Min. 3 characters')
      .required('veuillez remplir ce champ.'),
    urlPv: Yup.string()
      .required('veuillez remplir ce champ.'),
    ordreDuJour: Yup.string()
      .required('veuillez remplir ce champ.'),
    datePv: Yup.string()
      .required('veuillez remplir ce champ.'),
  });
  const [status, setStatus] = useState('');
  const clearStatus = () => {
    setStatus('');
  }

  const handleSubmitEvent = (values) => {
    const { nouveauIntituleThese, codePv, urlPv, ordreDuJour, datePv } = values;
    const submitData = {
      doctorantId: data?.id,
      nouveauIntituleThese: nouveauIntituleThese,
      pv: {
        code: codePv,
        url: urlPv,
        ordreDuJour: ordreDuJour,
        date: datePv,
      }
    }
    const CHANGEMENT_THESE_URL = `http://localhost:9000/api/Doctorants/changementThese`
    axios.put(CHANGEMENT_THESE_URL, submitData)
      .then(res => {
        setStatus('success');
        console.log(res.data)
      })
      .catch(err => {
        setStatus('error');
        console.log(err)
      })
  }
  const [PVs, setPVs] = useState([])
  useEffect(() => {
    axios.get('http://localhost:9000/api/PVs/allPV')
      .then(res => setPVs(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className=' w-4/6 md:h-full px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[rgb(151,71,255)]'>
      <div className='flex flex-col pb-4 w-full px-10  bg-white rounded-[45px] md:h-full'>
        {
          status ? <SubmitCarte state={status} clear={clearStatus} titre={status === 'success' ? 'Changement avec success' : ' Echec dans le changement de these'} message={status === 'success' ? "Le changement de these a été effectuée avec succées." : "Désolé , nous n'avons pas pu effectuer le changement de these, veuillez réessayez plus tard, ou contacter l'administrateur pour obtenir de l'aide"} />
            :
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmitEvent}
            >
              {
                (form) => {
                  const { setFieldValue } = form;
                  return (
                    <Form className="grid w-full grid-cols-2 mt-4 gap-x-20 gap-y-4 md:px-10">
                      <div className='flex col-span-2'><h2 className='text-[#13005A] mr-2'>Intitulé de these Actuelle:</h2><p>{data?.intituleeThese}</p></div>
                      <div className='col-span-2 mr-40'><FormsTextInput name="nouveauIntituleThese" label="Nouveau Intitulé de these :" /></div>
                      <div>
                        <FormsCreatableSelect
                          options={PVs.map(pv => { return { label: pv.code, value: pv.code } })}
                          name="codePV"
                          label="Code"
                          onChange={selectedOption => {
                            form.setFieldValue('codePv', selectedOption.value);
                            const PV = PVs.find(pv => pv.code === selectedOption.value);
                            if (!PV) {
                              setFieldValue('urlPv', '');
                              setFieldValue('ordreDuJour', '');
                              setFieldValue('datePv', '');
                              return false;
                            };
                            setFieldValue('urlPv', PV.url);
                            setFieldValue('ordreDuJour', PV.ordreDuJour);
                            setFieldValue('datePv', new Date(PV.date));
                          }}
                        />
                      </div>
                      <div><FormsTextInput name="urlPv" label="Url" /></div>
                      <div><FormsTextInput name="ordreDuJour" label="Ordre du jour" /></div>
                      <div><FormsDatePicker name="datePv" label="Date du proces verbal" /></div>
                      <button type="submit" className=" col-start-2 ml-12 rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border border-transparent hover:border-[#03C988]">Confirmer la modification</button>
                    </Form >
                  )
                }
              }
            </Formik >
        }
      </div>
    </div >
  )
}

export default CarteChangementThese;