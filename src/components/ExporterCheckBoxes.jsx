import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

const options = [
    { name: "nombool", label: 'nom' },
    { name: "prenombool", label: 'prenom' },
    { name: "dateNaissancebool", label: 'date de naissance' },
    { name: "sexebool", label: 'sexe' },
    { name: "telephonebool", label: 'telephone' },
    { name: "emailbool", label: 'email' },
    { name: "typeDoctoratbool", label: 'type de doctorat' },
    { name: "typeDiplomebool", label: 'type de diplome' },
    { name: "etablissementOriginebool", label: 'etablissement d\'origine' },
    { name: "premiereInscriptionbool", label: 'preniere inscription' },
    { name: "totalinscriptionbool", label: 'nombre total d\'inscription' },
    { name: "intituleeThesebool", label: 'intitulee de these' },
    { name: "laboratoirebool", label: 'Laboratoire' },
    { name: "optionbool", label: 'Option' },
    { name: "FCTbool", label: 'FCT' },
    { name: "statusbool", label: 'Status' },
    { name: "directeurbool", label: 'Directeur' },
    { name: "codirecteurbool", label: 'Co Directeur' },
    { name: "changementThesebool", label: 'Changement de thse' },
    { name: "observationbool", label: 'Observation' },
    { name: "pvbool", label: 'PV' },
];

const ExporterCheckBoxes = ({ handleChangeEvent }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(options.map(option => {
            return { name: option.name, label: option.label, isChecked: false }
        }));
    }, []);
    useEffect(() => {
        handleChangeEvent(data);
    }, [data, handleChangeEvent])

    const handleCheckboxChange = (event) => {
        const item = event.target.name;
        const isChecked = event.target.checked;
        setData(prevData =>
            prevData.map(user => (user.name === item ? { ...user, isChecked } : user))
        );
    };

    const handleToggleAll = (event) => {
        const isChecked = event.target.checked;
        setData((prevData) => prevData.map(user => ({ ...user, isChecked })));
    };


    const checkboxes = data.map(option => (
        <div className="" key={option.name}>
            <label
                className="flex mb-2    gap-2 items-center  text-semibold mr-5 text-sm tracking-wide text-[#13005A]"
                htmlFor={option.name}
            >
                <CheckBox
                    key={option.name}
                    name={option.name}
                    checked={option?.isChecked || false}
                    onChange={handleCheckboxChange}
                />
                {option.label}
            </label>
        </div>
    ));
    return (
        <>
            <form className="container my-4 md:grid md:grid-cols-5 bg-white w-fit h-fit p-5 mb-5 rounded-3xl border-[#1C82AD] border-2 ">
                <label
                    className="flex gap-2 mb-2 col-span-5 justify-start w-ful text-bold mr-5 text-lh tracking-wide text-[#13005A]"
                >
                    <CheckBox
                        indeterminate={
                            data.some((user) => user?.isChecked === true) &&
                            data.some((user) => user?.isChecked === false)
                        }
                        checked={data.every((user) => user?.isChecked === true)}
                        onChange={handleToggleAll}
                    />
                    Select All
                </label>
                {checkboxes}
            </form>
        </>
    );
}

export default ExporterCheckBoxes;
