import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormsTextInput from './FormsTextInput'
import FormsDatePicker from './FormsDatePicker'
import axios from 'axios'

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
    const url = `http://localhost:8080/api/Doctorants/changementThese`
    axios.put(url, submitData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  return (
    <div className=' w-4/6 h-fit px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'>
      <div className='flex flex-col pb-4 w-full px-10  bg-white rounded-[45px] md:h-full'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitEvent}
        >
          <Form className="grid w-full grid-cols-2 mt-4 gap-x-20 gap-y-4 md:px-10">
            <div className='flex col-span-2'><h2 className='text-[#13005A] mr-2'>Intitulé de these Actuelle:</h2><p>{data?.intituleeThese}</p></div>
            <div className='col-span-2 mr-40'><FormsTextInput name="nouveauIntituleThese" label="Nouveau Intitulé de these :" /></div>
            <div><FormsTextInput name="codePv" label="Code" /></div>
            <div><FormsTextInput name="urlPv" label="Url" /></div>
            <div><FormsTextInput name="ordreDuJour" label="Ordre du jour" /></div>
            <div><FormsDatePicker name="datePv" label="Date du proces verbal" /></div>
            <button type="submit" className=" col-start-2 ml-12 rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border border-transparent hover:border-[#03C988]">Confirmer la modification</button>
          </Form >
        </Formik >
      </div>
    </div >
  )
}

export default CarteChangementThese;