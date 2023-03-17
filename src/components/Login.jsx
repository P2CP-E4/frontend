import React from "react";
import logo from "../assets/images/logo.svg"
import crois from "../assets/images/crois.svg"
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("entrer un email valide please")
                .required(),
            password: Yup.string()
                .required()
        }),
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <div className="flex flex-wrap content-center justify-center rounded-2xl bg-white shadow-xl w-[450px] h-fit px-4 pt-4 pb-12" >
            <img src={crois} alt="crois" className="w-5 mb-2 ml-auto cursor-pointer" />
            <div className="w-full pb-5 flex flex-col items-center">
                <img src={logo} alt="logo" className="w-12 h-12 pb-3" />
                <h1 className="text-2xl text-[#13005A]">Bienvenue à la DPGR!</h1>
            </div>
            <div className="w-64">
                <form className="mt-4" onSubmit={formik.onSubmit}>
                    <div className="mb-8">
                        <label className="mb-2 block text-xs font-normal text-[#13005A]">Adresse email</label>
                        <input
                            type="email"
                            id="email"
                            className="outline-none block w-full appearance-none rounded-lg border border-[#1C82AD] py-1.5 px-4"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-xs font-normal text-[#13005A]">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="outline-none block w-full appearance-none rounded-lg border py-1.5 px-4 border-[#1C82AD]"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            autoComplete="current-password"
                        />

                    </div>
                    <a href="/" className="text-xs underline font-medium text-[#13005A]">Mot de passe oublié ?</a>
                    <div className="mb-3 mt-12 flex flex-col items-center">
                        <button
                            className="bg-[#03C988] rounded-3xl font-semibold text-center w-full text-white text-base px-6 py-1.5 hover:bg-white hover:text-[#03C988] border-2 border-[#03C988] "
                            type="submit"
                        >
                            Se connecter
                        </button>
                        <span className="py-3 font-semibold text-sm">OU</span>
                        <button
                            className="flex flex-wrap justify-between rounded-3xl w-full border border-[#1C82AD] bg-[#EEF1F2] px-4 py-2.5 "
                            type="button"
                        >

                            <small className=" text-gray-500">Continuer en tant que ...</small>
                            <img
                                className="w-5"
                                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                                alt='google'
                            />
                        </button>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default Login;