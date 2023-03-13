import React from "react";
const FormulairePage1 = ({ formik, handleSuivantEvent }) => {
    return (
        <>
            <form className="my-2 mb-4 flex flex-col bg-white px-8 pt-6 pb-8">
                <h1 className="text-lg font-bold leading-10  text-[#03C988]">
                    Informations personnelles
                </h1>
                <div className="-mx-3 mb-6 md:flex">
                    <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs font-bold tracking-wide text-[#13005A]"
                            htmlFor="nom"
                        >
                            Nom
                        </label>
                        <input
                            className="mb-3 block w-2/3 appearance-none rounded border border-[#1C82AD] py-2 px-4 outline-none"
                            id="nom"
                            type="text"
                            value={formik.values.nom}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="px-3 md:w-1/2">
                        <label
                            className="mb-2 block text-xs font-bold tracking-wide text-[#13005A]"
                            htmlFor="prenom"
                        >
                            Prenom
                        </label>
                        <input
                            className="block w-2/3 appearance-none rounded border border-[#1C82AD] py-2 px-4 outline-none"
                            id="prenom"
                            type="text"
                            value={formik.values.prenom}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>

                <div className="-mx-3 mb-6 md:flex">
                    <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs font-bold tracking-wide text-[#13005A]"
                            htmlFor="sexe"
                        >
                            Sexe
                        </label>
                        <select
                            className="block w-2/3 appearance-none rounded border border-[#1C82AD] py-2 px-4 pr-8 outline-none"
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
                            className="mb-2 block text-xs font-bold tracking-wide text-[#13005A]"
                            htmlFor="dateNaissance"
                        >
                            Date de naissance
                        </label>
                        <input
                            className="block w-2/3 appearance-none rounded border border-[#1C82AD] py-2 px-4 outline-none"
                            id="dateNaissance"
                            type="date"
                            value={formik.values.dateNaissance}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>

                <div className="-mx-3 mb-6 md:flex">
                    <div className="mb-6 px-3 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs font-bold tracking-wide text-[#13005A]"
                            htmlFor="telephone"
                        >
                            N° de telephone
                        </label>
                        <input
                            className="mb-3 block w-2/3 appearance-none rounded border border-[#1C82AD] py-2 px-4 outline-none"
                            id="telephone"
                            type="text"
                            value={formik.values.telephone}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="px-3 md:w-1/2">
                        <label
                            className="mb-2 block text-xs font-bold tracking-wide text-[#13005A]"
                            htmlFor="mail"
                        >
                            Adresse email
                        </label>
                        <input
                            className="block w-2/3 appearance-none rounded border border-[#1C82AD] py-2 px-4 outline-none"
                            id="mail"
                            type="text"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <button
                    className=" text-l mx-auto rounded-2xl bg-[#13005A] py-3 px-10 text-white shadow hover:border-[#13005A] hover:bg-white hover:text-[#13005A]"
                    onClick={handleSuivantEvent}
                >
                    Suivant
                </button>
            </form>
        </>
    );
};

export default FormulairePage1;
