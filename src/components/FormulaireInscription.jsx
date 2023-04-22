import React, { useState } from "react";
import FormulairePage1 from "./FormulairePage1";
import FormulairePage2 from "./FormulairePage2";
import FormulairePage3 from "./FormulairePage3";
import FormulairePage4 from "./FormulairePage4";
import ProgressBar from "./ProgressBar";

const FormulaireInscription = () => {
    //TODO: make post request on Submit
    //TODO: comfirm page ,after Submit
    const [currentStep, setCurrentStep] = useState(0);
    const [data, setData] = useState({
        nom: '',
        prenom: '',
        sexe: '',
        dateNaissance: '',
        telephone: '',
        email: '',
        typeDoctorat: 'LMD',
        typeDiplome: '',
        etablissementOrigine: '',
        these: '',
        laboratoire: '',
        premiereInscription: '',
        dateEnregistrementFCT: '',
        codePV: '',
        nomDirecteur: '',
        etablissementDirecteur: '',
        gradeDirecteur: '',
        nomCoDirecteur: '',
        etablissementCoDirecteur: '',
        gradeCoDirecteur: ''
    });

    const makeRequest = (formData) => {
        console.log('Form Submitted', formData);
    }

    const handleNextStep = (newData, final = false) => {
        setData(prev => ({ ...prev, ...newData }));
        if (final) {
            makeRequest(newData);
            return;
        }
        setCurrentStep(currentStep + 1);

    }
    const handlePreviousStep = (newData) => {
        setData(prev => ({ ...prev, ...newData }));
        setCurrentStep(currentStep - 1);
    }

    const steps = [
        <FormulairePage1 key={1} data={data} next={handleNextStep} />,
        <FormulairePage2 key={2} data={data} next={handleNextStep} back={handlePreviousStep} />,
        <FormulairePage3 key={3} data={data} next={handleNextStep} back={handlePreviousStep} />,
        <FormulairePage4 key={4} data={data} next={handleNextStep} back={handlePreviousStep} />
    ]
    return (
        <div className='w-3/4 md:h-5/6 px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <div className="flex flex-col items-center w-full pt-8 bg-white rounded-[45px] md:h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" >
                <ProgressBar progressValue={((currentStep + 1) / steps.length) * 100 + '%'} />
                {steps[currentStep]}
            </div>
        </div >
    );
}

export default FormulaireInscription;