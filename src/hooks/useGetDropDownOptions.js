import { useState, useEffect } from 'react'
import axios from 'axios'

export function useGetDropDownOptions() {
    const [dropDownOptions, setDropDownOptions] = useState({});

    useEffect(() => {
        const GET_DROPDOWN_OPTIONS = 'http://localhost:8080/api/Doctorants/recupLaboOpt'
        axios.get(GET_DROPDOWN_OPTIONS)
            .then(res => {
                setDropDownOptions(res.data);
            })
            .catch(err => console.log(err))
    }, []);


    const laboDropDownOptions = [...new Set(dropDownOptions.laboratoires, 'LMCS', 'LCSI')].map((item) => {
        if (item === 'LMCS' || item === 'LCSI') return ({ label: `${item} - ESI`, value: item });
        return ({ label: item, value: item });
    });

    const optionDropDownOptions = [...new Set(dropDownOptions.options, 'SIQ', 'SI')].map((item) => ({ label: item, value: item }));

    const sexeDropDownOptions = [
        { label: "Homme", value: "M" },
        { label: "Femme", value: "F" },
    ]
    const typeDiplomeDropDownOptions = [
        { value: "Master", label: "Master" },
        { value: "Magister", label: "Magister" },
        { value: "Ingeniorat", label: "Ingeniorat" },
    ]

    return { sexeDropDownOptions, typeDiplomeDropDownOptions, laboDropDownOptions, optionDropDownOptions };
}