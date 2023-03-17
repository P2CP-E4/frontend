import React, { useState } from "react";
import { motion } from "framer-motion"
const Arrow = ({ showCoDirecteur, fill }) => {
    return <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
        <motion.path
            d="M2.7025 0L11.5 8.65317L20.2975 0L23 2.66397L11.5 14L0 2.66397L2.7025 0Z"
            fill={fill}
            animate={{
                rotate: showCoDirecteur ? 180 : 0,
            }}
            transition={{
                duration: 0.3
            }}
        />
    </svg>
}

const FormulairePage4 = ({ formik }) => {
    const [showCoDirecteur, setShowCoDirecteur] = useState(false);
    const handleClickEvent = () => {
        setShowCoDirecteur(!showCoDirecteur);
    }

    return (
        <>
            <h2 className="mr-auto ml-40 text-lg font-semibold leading-10  text-[#03C988]">
                Information de directeur
            </h2>
            <div className="w-4/5 mt-10">
                <div className="mb-12 -mx-3 md:flex">
                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="nomDirecteur"
                        >
                            Nom du Directeur
                        </label>
                        <input
                            className={`outline-none mb-3 block w-full appearance-none rounded-lg border py-2 px-4 ${formik.touched.nomDirecteur && formik.errors.nomDirecteur ? 'border-red-400' : 'border-[#1C82AD]'}`}
                            id="nomDirecteur"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nomDirecteur}
                        />
                    </div>
                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="etablissementDirecteur"
                        >
                            Nom d'Etablissement du Directeur
                        </label>
                        <input
                            className={`outline-none mb-3 block w-full appearance-none rounded-lg border py-2 px-4 ${formik.touched.etablissementDirecteur && formik.errors.etablissementDirecteur ? 'border-red-400' : 'border-[#1C82AD]'}`}
                            id="etablissementDirecteur"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.etablissementDirecteur}
                        />
                    </div>
                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="gradeDirecteur"
                        >
                            Grade du Directeur
                        </label>
                        <input
                            className={`outline-none mb-3 block w-full appearance-none rounded-lg border py-2 px-4 ${formik.touched.gradeDirecteur && formik.errors.gradeDirecteur ? 'border-red-400' : 'border-[#1C82AD]'}`}
                            id="gradeDirecteur"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.gradeDirecteur}
                        />
                    </div>
                </div>

                <div
                    className=" cursor-pointer flex items-center w-fit rounded-3xl border border-[#1C82AD] py-1 px-4 mb-2 text-sm text-[#13005A]"
                    onClick={handleClickEvent}
                >
                    Information du Co-directeur <span className="text-[#03C988] pl-1 pr-5">(optionnelle)</span>
                    <Arrow showCoDirecteur={showCoDirecteur} fill='#03C988' />
                </div>
                {
                    showCoDirecteur && <div className="mt-5 mb-12 -mx-3 md:flex">
                        <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                            <label
                                className="mb-2 block text-xs tracking-wide text-[#13005A]"
                                htmlFor="nomCoDirecteur"
                            >
                                Nom du Co-Directeur
                            </label>
                            <input
                                className={`outline-none mb-3 block w-full appearance-none rounded-lg border py-2 px-4 ${showCoDirecteur && formik.touched.nomCoDirecteur && formik.errors.nomCoDirecteur ? 'border-red-400' : 'border-[#1C82AD]'}`}
                                id="nomCoDirecteur"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.nomCoDirecteur}
                            />
                        </div>
                        <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                            <label
                                className="mb-2 block text-xs tracking-wide text-[#13005A]"
                                htmlFor="etablissementCoDirecteur"
                            >
                                Etablissement
                            </label>
                            <input
                                className={`outline-none mb-3 block w-full appearance-none rounded-lg border py-2 px-4 ${showCoDirecteur && formik.touched.etablissementCoDirecteur && formik.errors.etablissementCoDirecteur ? 'border-red-400' : 'border-[#1C82AD]'}`}
                                id="etablissementCoDirecteur"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.etablissementCoDirecteur}
                            />
                        </div>
                        <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                            <label
                                className="mb-2 block text-xs tracking-wide text-[#13005A]"
                                htmlFor="gradeCoDirecteur"
                            >
                                Grade
                            </label>
                            <input
                                className={`outline-none mb-3 block w-full appearance-none rounded-lg border py-2 px-4 ${showCoDirecteur && formik.touched.gradeCoDirecteur && formik.errors.gradeCoDirecteur ? 'border-red-400' : 'border-[#1C82AD]'}`}
                                id="gradeCoDirecteur"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.gradeCoDirecteur}
                            />
                        </div>
                    </div>
                }
            </div >
        </>
    );
}

export default FormulairePage4;