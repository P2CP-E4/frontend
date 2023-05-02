import { useState, useEffect } from 'react';
import axios from 'axios';

export function useGetNomCompletDropDownOption() {

    const [dropdownOptions, setDropdownOptions] = useState([]);

    useEffect(() => {
        const GET_NOMCOMPLET_URL = 'http://localhost:9000/api/Doctorants/recupNomComplet';

        axios.get(GET_NOMCOMPLET_URL)
            .then(res => {
                setDropdownOptions(res.data.map((doctorant) => {
                    return {
                        value: doctorant._id,
                        label: doctorant.nomComplet
                    }
                }))
            })
            .catch(err => console.log(err));
    }, []);
    return dropdownOptions;
}
