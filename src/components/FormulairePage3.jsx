const FormulairePage3 = ({ formik }) => {
    return (
        <>
            <h2 className="mr-auto ml-40 text-lg font-semibold leading-10 text-[#03C988]">
                Information de these
            </h2>
            <div className="w-4/5 mt-10">
                <div className="mb-12 -mx-3 md:flex">
                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="these"
                        >
                            Intitulé de these
                        </label>
                        <input
                            className={`bg-white outline-none mb-3 block w-full appearance-none rounded-lg border py-2 px-4 ${(formik.touched.these && formik.errors.these) ? 'border-red-400' : 'border-[#1C82AD]'}`}
                            id="these"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.these}
                            onBlur={formik.handleBlur}

                        />
                    </div>
                    <div className="px-3 mb-6 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="Laboratoire"
                        >
                            Laboratoire
                        </label>
                        <select
                            className={`bg-white outline-none block w-full appearance-none rounded-lg border py-2 px-4 ${(formik.touched.laboratoire && formik.errors.laboratoire) ? 'border-red-400' : 'border-[#1C82AD]'}`}
                            id="laboratoire"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.laboratoire}

                        >
                            <option>LMCS - ESI</option>
                            <option>LCSI - ESI</option>
                            <option>Autre</option>
                        </select>
                    </div>
                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="premiereInscription"
                        >
                            Date de la Première Inscription
                        </label>
                        <input
                            className={`outline-none mb-3 block w-full appearance-none rounded-lg border py-2 px-4 ${formik.touched.premiereInscription && formik.errors.premiereInscription ? 'border-red-400' : 'border-[#1C82AD]'}`}
                            id="premiereInscription"
                            type="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.premiereInscription}

                        />
                    </div>
                </div>

                <div className="mb-6 -mx-3 md:flex">
                    <div className="px-3 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="dateEnregistrementFCT"
                        >
                            Date enregistrement FCT
                        </label>
                        <input
                            className={`outline-none block w-full appearance-none rounded-lg border py-2 px-4 ${formik.touched.dateEnregistrementFCT && formik.errors.dateEnregistrementFCT ? 'border-red-400' : 'border-[#1C82AD]'}`}
                            id="dateEnregistrementFCT"
                            type="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dateEnregistrementFCT}

                        />
                    </div>
                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="codePV"
                        >
                            Code du Procès verbal
                        </label>
                        <input
                            className={`outline-none mb-3 block w-full appearance-none rounded-lg border py-2 px-4 ${formik.touched.codePV && formik.errors.codePV ? 'border-red-400' : 'border-[#1C82AD]'}`}
                            id="codePV"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.codePV}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="codePV"
                        >
                            Importer le Procés Verbal
                        </label>
                        <input
                            className={`outline-none mb-3 block w-full appearance-none rounded-lg border py-2 px-4 ${formik.touched.codePV && formik.errors.codePV ? 'border-red-400' : 'border-[#1C82AD]'}`}
                            id="codePV"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.codePV}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormulairePage3;