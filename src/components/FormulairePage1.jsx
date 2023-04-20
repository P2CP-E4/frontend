import React from "react";
import error from "../assets/images/formsErrorSign.svg"
const FormulairePage1 = ({ formik }) => {
    return (
        <div className="w-2/3">
            <h2 className="text-lg font-semibold leading-10 text-[#03C988] mb-3">
                Informations personnelles
            </h2>
            <div className="mb-6 -mx-3 md:flex">
                <div className="relative px-4 pb-2 mb-6 md:mb-0 md:w-1/2" >
                    <label
                        className="mb-2 text-xs tracking-wide text-[#13005A]"
                        htmlFor="nom"
                    >
                        Nom
                    </label>
                    <input
                        className={`outline-none mb-3 block w-full appearance-none rounded-lg border py-2 px-4 ${(formik.touched.nom && formik.errors.nom) ? 'border-red-400' : 'border-[#1C82AD]'}`}
                        id="nom"
                        type="text"
                        value={formik.values.nom}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.nom && formik.errors.nom && <img src={error} alt="error" className="absolute w-4 h-4 top-9 right-7" />}
                    {formik.touched.nom && formik.errors.nom && <span className="absolute bottom-0 text-xs text-red-400 left-5" >{formik.errors.nom}</span>}
                </div>
                <div className="px-3 md:w-1/2">
                    <label
                        className="mb-2 text-xs tracking-wide text-[#13005A]"
                        htmlFor="prenom"
                    >
                        Prenom
                    </label>
                    <input
                        className={`outline-none block w-full appearance-none rounded-lg border border-[#1C82AD] py-2 px-4 ${(formik.touched.prenom && formik.errors.prenom) ? 'border-red-400' : 'border-[#1C82AD]'}`}
                        id="prenom"
                        type="text"
                        value={formik.values.prenom}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
            </div>

            <div className="mb-6 -mx-3 md:flex">
                <div className="px-3 mb-6 md:mb-0 md:w-1/2">
                    <label
                        className="mb-2 text-xs tracking-wide text-[#13005A]"
                        htmlFor="sexe"
                    >
                        Sexe
                    </label>
                    <select
                        className={`bg-white outline-none block w-full rounded-lg border py-2.5 px-4 ${(formik.touched.sexe && formik.errors.sexe) ? 'border-red-400' : 'border-[#1C82AD]'}`}
                        id="sexe"
                        onChange={formik.handleChange}
                        value={formik.values.sexe}
                        onBlur={formik.handleBlur}

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
                        className={`outline-none block w-full appearance-none rounded-lg border py-2 px-4 ${(formik.touched.dateNaissance && formik.errors.dateNaissance) ? 'border-red-400' : 'border-[#1C82AD]'}`}
                        id="dateNaissance"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.dateNaissance}
                        onBlur={formik.handleBlur}

                    />
                </div>
            </div>

            <div className="mt-6 mb-6 -mx-3 md:flex">
                <div className="px-3 mb-6 md:mb-0 md:w-1/2">
                    <label
                        className="mb-2 block text-xs tracking-wide text-[#13005A]"
                        htmlFor="telephone"
                    >
                        N° de telephone
                    </label>
                    <input
                        className={`outline-none mb-3 block w-full appearance-none rounded-lg border  py-2 px-4 ${(formik.touched.telephone && formik.errors.telephone) ? 'border-red-400' : 'border-[#1C82AD]'}`}
                        id="telephone"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.telephone}
                        onBlur={formik.handleBlur}

                    />
                </div>
                <div className="px-3 md:w-1/2">
                    <label
                        className="mb-2 block text-xs tracking-wide text-[#13005A]"
                        htmlFor="email"
                    >
                        Adresse email
                    </label>
                    <input
                        className={`outline-none block w-full appearance-none rounded-lg border py-2 px-4 ${(formik.touched.email && formik.errors.email) ? 'border-red-400' : 'border-[#1C82AD]'}`}
                        id="email"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                </div>
            </div>
        </div >
    );
};

export default FormulairePage1;
