import { useState } from 'react';


function StatsGenerator({ options, years, onSubmit }) {
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);

    const [selectedYear1, setSelectedYear1] = useState(null);
    const [selectedYear2, setSelectedYear2] = useState(null);

    const handleYear1Click = (year) => {
        setSelectedYear1(year);
    };

    const handleYear2Click = (year) => {
        setSelectedYear2(year);
    };

    const handleOption1Click = (option) => {
        setSelectedOption1(option);
    };

    const handleOption2Click = (option) => {
        setSelectedOption2(option);
    };

    const options2 = options.filter(option => option.value !== selectedOption1);
    const option2 = years.filter(option => parseInt(option) > parseInt(selectedYear1));


    return (
        <div>
            <h1 className='mb-5'>{'Générer une representation graphique (statistique multi-criteres)'} :</h1>
            <div className='w-full h-40 p-5 pt-3 mb-10 bg-white shadow-lg rounded-xl'>
                <div>
                    <span className='text-[#13005A] font-semibold'>Representation graphique de</span>
                    <span className='relative text-[#03C988] font-semibold'>
                        <select
                            className='m-1  border  border-[#03C988] p-[2px] rounded-sm hover:cursor-pointer'
                            value={selectedOption1}
                            onChange={(event) => handleOption1Click(event.target.value)}
                        >
                            <option className='text-black ' value=''>Critere 1</option>
                            {options.map((option) => (
                                <option className='text-black' key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </span>
                    <span className='text-[#13005A] font-semibold'>selon</span>
                    <span className='relative text-[#03C988] font-semibold'>
                        <select
                            className='m-1 border border-[#03C988] p-[2px] rounded-sm hover:cursor-pointer '
                            value={selectedOption2}
                            onChange={event => handleOption2Click(event.target.value)}
                            disabled={!selectedOption1}
                        >
                            <option className='text-black' value=''>Critere 2</option>
                            {options2.map((option) => (
                                <option className='text-black' key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </span>
                </div>

                <div>
                    <span className='text-[#13005A] font-semibold'>entre </span>
                    <span className='relative text-[#03C988] font-semibold'>
                        <select
                            className='m-1 border border-[#03C988] p-[2px] rounded-sm hover:cursor-pointer '
                            value={selectedYear1}
                            onChange={event => handleYear1Click(event.target.value)}
                        >
                            <option className='text-black' value=''>Année 1 </option>
                            {years.map(year => (
                                <option className='text-black' key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </span>
                    <span className='text-[#13005A] font-semibold'>et</span>
                    <span className='relative text-[#03C988] font-semibold'>
                        <select
                            className='m-1 border border-[#03C988] p-[2px] rounded-sm hover:cursor-pointer '
                            value={selectedYear2}
                            onChange={event => handleYear2Click(event.target.value)}
                            disabled={!selectedYear1}
                        >
                            <option className='text-black' value=''>Année 2 </option>
                            {option2.map(year => (
                                <option className='text-black' key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                    </div>
                    <div className="ml-auto">
                        <button
                            className="bg-[#03C988] text-white hover:bg-white hover:text-[#03C988] border-[#03C988] border-2 py-2 px-4 rounded-full"
                            type='button'
                            onClick={() => onSubmit(selectedOption1, selectedOption2, selectedYear1, selectedYear2)}
                        >
                            Générer
                        </button>
                    </div>
                </div>

            </div>
        </div>



    );
}

StatsGenerator.defaultProps = {

    years: (() => {
        const currentYear = new Date().getFullYear();
        const option = [];
        for (let i = currentYear; i >= 1990; i--) {
            option.push(i.toString());
        }
        return option;
    })(),

    options: [
        { value: 'status', label: 'Status' },
        { value: 'laboratoire', label: 'Laboratoire' },
        { value: 'option', label: 'Option' },
        { value: 'typeDoctorat', label: 'Type doctorat' },
        { value: 'typeDiplome', label: 'Type diplome' },
        { value: 'sexe', label: 'sexe' },
    ],

};

export default StatsGenerator;