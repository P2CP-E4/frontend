import React from "react";

const Essaie = ({ formik, handleSuivantEvent }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <h1 className="text-[#03C988] font-medium font-poppins text-lg leading-10">Informations personnelles</h1>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="nom"
            >
              Nom
            </label>
            <input
              className="appearance-none block w-full border border-red rounded py-3 px-4 mb-3"
              id="nom"
              type="text"
              value={formik.values.FormulairePage1.nom}
              onChange={formik.handleChange}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="prenom"
            >
              Prenom
            </label>
            <input
              className="appearance-none block w-full border border-grey-lighter rounded py-3 px-4"
              id="prenom"
              type="text"
              value={formik.values.FormulairePage1.prenom}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="sexe"
            >
              Sexe
            </label>
            <select
              class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
              id="sexe"
              onChange={formik.handleChange}
              value={formik.values.FormulairePage1.sexe}
            >
              <option>Homme</option>
              <option>Femme</option>
            </select>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="dateNaissance"
            >
              Date de naissance
            </label>
            <input
              className="appearance-none block w-full border rounded py-3 px-4"
              id="dateNaissance"
              type="date"
              value={formik.values.FormulairePage1.dateNaissance}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="telephone">
              N° de telephone
            </label>
            <input
              className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 mb-3"
              id="telephone"
              type="text"
              value={formik.values.FormulairePage1.telephone}
              onChange={formik.handleChange}
            />

          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="mail"
            >
              Adresse email
            </label>
            <input
              className="appearance-none block w-full border rounded py-3 px-4"
              id="mail"
              type="text"
              value={formik.values.FormulairePage1.email}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <button className="block uppercase mx-auto shadow bg-[#13005A] hover:bg-white hover:text-[#13005A]  focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded-2xl">Suivant</button>
      </div>
    </>
  );
}

export default Essaie;