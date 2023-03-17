const FormulairePage2 = ({ formik }) => {
    return (
        <div className="w-2/3">
            <h2 className="text-lg font-semibold leading-10 mb-6  text-[#03C988]">
                Cursus universitaire
            </h2>
            <h6 className="text-xs mb-3 text-[#13005A] ">Type du doctorat : </h6>
            <div className="flex">
                <label className="mr-10 cursor-pointer">
                    <input type="radio" className="sr-only peer" name="type de these" defaultChecked={true} />
                    <div className="bg-white rounded-2xl border border-[#1C82AD] px-7 py-1 text-[#898989] text-sm transition-all peer-checked:text-white peer-checked:bg-[#1C82AD]">
                        LMD
                    </div>
                </label>
                <label className="cursor-pointer">
                    <input type="radio" className="sr-only peer" name="type de these" />
                    <div className=" bg-white rounded-2xl border border-[#1C82AD] px-7 py-1 text-[#898989] text-sm transition-all peer-checked:text-white peer-checked:bg-[#1C82AD]">
                        Classique
                    </div>
                </label>
            </div>
            <div className="mt-4">
                <label
                    className="mb-2 block text-xs tracking-wide text-[#13005A]"
                    htmlFor="typeDiplome"
                >
                    Type du diplome
                </label>
                <select
                    className={`bg-white outline-none block w-full appearance-none rounded-lg border border-[#1C82AD] py-2 px-4  ${(formik.touched.typeDiplome && formik.errors.typeDiplome) ? 'border-red-400' : 'border-[#1C82AD]'}`}
                    id="typeDiplome"
                    onChange={formik.handleChange}
                    value={formik.values.typeDiplome}
                    onBlur={formik.handleBlur}
                >
                    <option>Master</option>
                    <option>Majister</option>
                    <option>Ingeniorat</option>
                </select>
            </div>
            <div className="mt-6">
                <label
                    className="mb-2 block text-xs tracking-wide text-[#13005A]"
                    htmlFor="etablissementOrigine"
                >
                    Nom d'Etablissement d'origine
                </label>
                <input
                    className={`bg-white block outline-none w-full appearance-none rounded-lg border border-[#1C82AD] py-2 px-4 ${(formik.touched.etablissementOrigine && formik.errors.etablissementOrigine) ? 'border-red-400' : 'border-[#1C82AD]'}`}
                    id="etablissementOrigine"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.etablissementOrigine}
                    onBlur={formik.handleBlur}
                />
            </div>
        </div >
    );
}

export default FormulairePage2;