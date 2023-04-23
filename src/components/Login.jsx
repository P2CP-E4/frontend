import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"
import crois from "../assets/images/crois.svg"
import passwordVisibleEye from "../assets/images/passwordvisible.svg"
import passwordInvisibleEye from "../assets/images/passwordinvisible.svg"

import { useFormik } from "formik";
import * as Yup from "yup";

const Login = ({ handleCloseEvent }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

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
        <div
            className="mx-auto flex flex-wrap justify-center rounded-2xl bg-white shadow-xl w-[450px] h-fit px-4 pt-4 pb-7"
            onClick={e => e.stopPropagation()}
        >
            <img id='close-button' src={crois} alt="crois" className="w-5 mb-2 ml-auto cursor-pointer" onClick={handleCloseEvent} />
            <div className="flex flex-col items-center justify-center w-full pb-5">
                <img src={logo} alt="logo" className="h-20 pb-3 pl-40" />
                <h1 className="text-2xl text-[#13005A]">Bienvenue à la DPGR!</h1>
            </div>
            <div className="w-64">
                <form className="mt-4" onSubmit={formik.onSubmit}>
                    <div className="mb-8">
                        <label className="mb-2 block text-xs font-normal text-[#13005A]">Adresse email</label>
                        <input
                            type="email"
                            id="email"
                            className="outline-none block w-full text-[#13005A] text-sm appearance-none rounded-lg border border-[#1C82AD] py-2 px-4"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            autoComplete="email"
                        />
                    </div>

                    <div className="relative">
                        <label className="mb-2 block text-xs font-normal text-[#13005A]">Mot de passe</label>
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            id="password"
                            placeholder="••••••••"
                            className="outline-none block w-full text-[#13005A] text-sm appearance-none rounded-lg border py-2 px-4 border-[#1C82AD]"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            autoComplete="current-password"
                        />
                        <button
                            type="button"
                            className="absolute w-4 h-6 top-8 right-3"
                            onClick={togglePasswordVisibility}
                        >
                            {isPasswordVisible ? <img src={passwordVisibleEye} alt="password visible" className="w-4 h-4" /> : <img src={passwordInvisibleEye} alt="password invisible" className="w-4 h-4" />}
                        </button>
                    </div>
                    <a href="/" className="text-xs underline font-medium text-[#13005A]">Mot de passe oublié ?</a>
                    <div className="flex flex-col items-center mt-12 mb-3">
                        <Link to="/" className="w-fit h-fir">
                            <button
                                className="bg-[#03C988] rounded-3xl font-semibold text-center text-white text-base px-6 py-1.5 hover:bg-white hover:text-[#03C988] border-2 w-64 border-[#03C988] "
                                type="submit"
                            >
                                Se connecter
                            </button>
                        </Link>
                        <span className="py-3 text-sm font-semibold">OU</span>
                        <button
                            className="flex flex-wrap justify-between rounded-3xl w-full border border-[#1C82AD] bg-[#EEF1F2] px-4 py-2.5 "
                            type="button"
                        >
                            <small className="text-gray-500 ">Continuer en tant que ...</small>
                            <img
                                className="w-5"
                                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                                alt='google'
                            />
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default Login;