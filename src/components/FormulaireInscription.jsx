import React, { useState } from "react";
import FormulairePage1 from "./FormulairePage1";
import FormulairePage2 from "./FormulairePage2";
import FormulairePage3 from "./FormulairePage3";
import FormulairePage4 from "./FormulairePage4";
import FormulairePage5 from "./FormulairePage5";
import ProgressBar from "./ProgressBar";
import axios from "axios";
import { useGetDropDownOptions } from "../hooks/useGetDropDownOptions";
const FormulaireInscription = () => {

    //TODO: comfirm page ,after Submit

    const { sexeDropDownOptions, typeDiplomeDropDownOptions, laboDropDownOptions, optionDropDownOptions } = useGetDropDownOptions();
    console.log(sexeDropDownOptions)
    const [currentStep, setCurrentStep] = useState(0);
    const [data, setData] = useState({
        nom: '',
        prenom: '',
        sexe: '',
        dateNaissance: null,
        telephone: '',
        email: '',
        typeDoctorat: 'LMD',
        typeDiplome: '',
        etablissementOrigine: '',
        these: '',
        laboratoire: '',
        option: '',
        premiereInscription: null,
        nomDirecteur: '',
        etablissementDirecteur: '',
        gradeDirecteur: '',
        adresseEmailDirecteur: '',
        telephoneDirecteur: '',

        nomCoDirecteur: '',
        etablissementCoDirecteur: '',
        gradeCoDirecteur: '',
        adresseEmailCoDirecteur: '',
        telephoneCoDirecteur: '',
        codePV: '',
        urlPV: '',
        ordreDuJour: '',
        dateDuJour: null,
    });

    const makeRequest = (formData) => {

        const POST_DOCTORANT = 'http://127.0.0.1:8080/api/Doctorants/ajouter';
        let codirecteur = null;

        if (formData.nomCoDirecteur && formData.etablissementCoDirecteur && formData.gradeCoDirecteur && formData.adresseEmailCoDirecteur && formData.telephoneCoDirecteur) {
            codirecteur = {
                nomComplet: formData.nomDirecteur.toUpperCase(),
                grade: formData.gradeDirecteur,
                etablissement: formData.etablissementDirecteur,
                telephone: formData.telephoneDirecteur,
                email: formData.adresseEmailDirecteur,
            }
        }

        const submitData = {
            pv: {
                code: formData.codePV,
                date: formData.dateDuJour,
                url: formData.urlPV,
                ordreDuJour: formData.ordreDuJour,
            },
            directeur: {
                nomComplet: formData.nomDirecteur.toUpperCase(),
                grade: formData.gradeDirecteur,
                etablissement: formData.etablissementDirecteur,
                telephone: formData.telephoneDirecteur,
                email: formData.adresseEmailDirecteur,
            },
            codirecteur: codirecteur,
            nom: formData.nom.toUpperCase(),
            prenom: formData.prenom.toUpperCase(),
            dateNaissance: formData.dateNaissance,
            sexe: formData.sexe,
            telephone: formData.telephone,
            email: formData.email,
            premiereInscription: formData.premiereInscription,
            intituleeThese: formData.these,
            laboratoire: formData.laboratoire,
            option: formData.option,
            typeDoctorat: formData.typeDoctorat,
            typeDiplome: formData.typeDiplome,
            etablissementOrigine: formData.etablissementOrigine,
        }

        axios.post(POST_DOCTORANT, submitData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(submitData)
                console.log(error);
            });
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
        <FormulairePage1 key={1} data={data} next={handleNextStep} sexeDropDownOptions={sexeDropDownOptions} />,
        <FormulairePage2 key={2} data={data} next={handleNextStep} back={handlePreviousStep} typeDiplomeDropDownOptions={typeDiplomeDropDownOptions} />,
        <FormulairePage3 key={3} data={data} next={handleNextStep} back={handlePreviousStep} laboDropDownOptions={laboDropDownOptions} optionDropDownOptions={optionDropDownOptions} />,
        <FormulairePage4 key={4} data={data} next={handleNextStep} back={handlePreviousStep} />,
        <FormulairePage5 key={5} data={data} next={handleNextStep} back={handlePreviousStep} />,
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