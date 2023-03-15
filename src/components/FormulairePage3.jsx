const FormulairePage3 = ({ formik }) => {
    return (
        <>
            <h2 className="text-lg font-semibold leading-10 mb-16 text-[#03C988]">
                Information de these
            </h2>

            <div className="mb-12 -mx-3 md:flex">
                <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                    <label
                        className="mb-2 block text-xs tracking-wide text-[#13005A]"
                        htmlFor="Intitulé de these"
                    >
                        Intitulé de these
                    </label>
                    <input
                        className="mb-3 block w-full appearance-none rounded-lg border border-[#1C82AD] py-2 px-4"
                        id="Intitulé de these"
                        type="text"
                        value={formik.values.nom}
                        onChange={formik.handleChange}
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
                        className="block w-full appearance-none rounded-lg border border-[#1C82AD] py-2 px-4 "
                        id="Laboratoire"
                        onChange={formik.handleChange}
                        value={formik.values.sexe}
                    >
                        <option>LMCS - ESI</option>
                        <option>LCSI - ESI</option>
                        <option>Autre</option>
                    </select>
                </div>
                <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                    <label
                        className="mb-2 block text-xs tracking-wide text-[#13005A]"
                        htmlFor="Date de la Première Inscription"
                    >
                        Date de la Première Inscription
                    </label>
                    <input
                        className="mb-3 block w-full appearance-none rounded-lg border border-[#1C82AD] py-2 px-4"
                        id="PremiereInscription"
                        type="date"
                        value={formik.values.nom}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>

            <div className="mb-6 -mx-3 md:flex">
                <div className="px-3 md:w-1/2">
                    <label
                        className="mb-2 block text-xs tracking-wide text-[#13005A]"
                        htmlFor="enregistrementFCT"
                    >
                        Date enregistrement FCT
                    </label>
                    <input
                        className="block w-full appearance-none rounded-lg border border-[#1C82AD] py-2 px-4"
                        id="enregistrementFCT"
                        type="date"
                        value={formik.values.dateNaissance}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                    <label
                        className="mb-2 block text-xs tracking-wide text-[#13005A]"
                        htmlFor="codePv"
                    >
                        Code du Procès verbal
                    </label>
                    <input
                        className="mb-3 block w-full appearance-none rounded-lg border border-[#1C82AD] py-2 px-4"
                        id="codePv"
                        type="text"
                        value={formik.values.nom}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                    <label
                        className="mb-2 block text-xs tracking-wide text-[#13005A]"
                        htmlFor="Importer le Procès Verbal"
                    >
                        Importer le Procés Verbal
                    </label>
                    <input
                        className="mb-3 block w-full appearance-none rounded-lg border border-[#1C82AD] py-2 px-4"
                        id="nom"
                        type="text"
                        value={formik.values.nom}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
        </>
    );
}

export default FormulairePage3;