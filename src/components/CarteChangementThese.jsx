import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormsTextInput from './FormsTextInput'
import FormsDatePicker from './FormsDatePicker'

const CarteChangementThese = ({ nomDoctorant, observation, theseActuelle }) => {
  const initialValues = {
    nouveauThese: '',
    codePv: '',
    urlPv: '',
    ordreDuJour: '',
    datePv: '',
  }
  const validationSchema = Yup.object().shape({
    nouveauThese: Yup.string()
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
  return (
    <div
      className=' w-4/6 h-[550px] px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]'
      onClick={e => e.stopPropagation()}
    >
      <div className='flex flex-col w-full py-10 px-10  bg-white rounded-[45px] md:h-full'>
        <h1 className='text-[#03C988] text-xl font-black text-center'>{`Modifier les theses du Doctorant “${nomDoctorant}“`}  </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form className="grid w-full grid-cols-2 mt-10 gap-x-20 gap-y-4 md:px-10">
            <div className='flex col-span-2'><h2 className='text-[#13005A] mr-2'>Observation: </h2><p>{observation}</p></div>
            <div className='flex col-span-2'><h2 className='text-[#13005A] mr-2'>Intitulé de these Actuelle:</h2><p>{theseActuelle}</p></div>
            <div className='col-span-2 mr-40'><FormsTextInput name="nouveauThese" label="Nouveau Intitulé de these :" /></div>
            <div><FormsTextInput name="codePv" label="Code" /></div>
            <div><FormsTextInput name="urlPv" label="Url" /></div>
            <div><FormsDatePicker name="ordreDuJour" label="Ordre du jour" /></div>
            <div><FormsDatePicker name="datePv" label="Date du proces verbal" /></div>
            <button type="submit" className=" col-start-2 ml-12 mt-6 rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border border-transparent hover:border-[#03C988]">Confirmer la modification</button>
          </Form >
        </Formik >
      </div>
    </div >
  )
}

export default CarteChangementThese;