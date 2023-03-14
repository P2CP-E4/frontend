import React from "react";
const FormulairePage1 = ({ formik }) => {
    return (
        <>
            <div className="flex flex-col w-full bg-white">
                <h2 className="text-lg font-semibold leading-10  text-[#03C988]">
                    Informations personnelles
                </h2>
                <div className="mb-6 -mx-3 md:flex">
                    <div className="content-center px-3 mb-6 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="nom"
                        >
                            Nom
                        </label>
                        <input
                            className="mb-3 block w-3/4 appearance-none rounded-lg border border-[#1C82AD] py-2 px-4 outline-none"
                            id="nom"
                            type="text"
                            value={formik.values.nom}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="px-3 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="prenom"
                        >
                            Prenom
                        </label>
                        <input
                            className="block w-3/4 appearance-none rounded-lg border border-[#1C82AD] py-2 px-4 outline-none"
                            id="prenom"
                            type="text"
                            value={formik.values.prenom}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>

                <div className="mb-6 -mx-3 md:flex">
                    <div className="px-3 mb-6 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="sexe"
                        >
                            Sexe
                        </label>
                        <select
                            className="block w-3/4 appearance-none rounded-lg border border-[#1C82AD] py-2 px-4 outline-none"
                            id="sexe"
                            onChange={formik.handleChange}
                            value={formik.values.sexe}
                        >
                            <option>Homme</option>
                            <option>Femme</option>
                        </select>
                    </div>
                    <div className="px-3 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="dateNaissance"
                        >
                            Date de naissance
                        </label>
                        <input
                            className="block w-3/4 appearance-none rounded-lg border border-[#1C82AD] py-2 px-4 outline-none"
                            id="dateNaissance"
                            type="date"
                            value={formik.values.dateNaissance}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>

                <div className="mb-6 -mx-3 md:flex">
                    <div className="px-3 mb-6 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="telephone"
                        >
                            N° de telephone
                        </label>
                        <input
                            className="mb-3 block w-3/4 appearance-none rounded-lg border border-[#1C82AD] py-2 px-4 outline-none"
                            id="telephone"
                            type="text"
                            value={formik.values.telephone}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="px-3 md:w-1/2">
                        <label
                            className="mb-2 block text-xs tracking-wide text-[#13005A]"
                            htmlFor="mail"
                        >
                            Adresse email
                        </label>
                        <input
                            className="block w-3/4 appearance-none rounded-lg border border-[#1C82AD] py-2 px-4 outline-none"
                            id="mail"
                            type="text"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormulairePage1;
