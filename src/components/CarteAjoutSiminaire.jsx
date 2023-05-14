import React, { useEffect, useState, useRef } from "react";
import { Form, Formik } from "formik";

import * as Yup from "yup";
import FormsTextInput from "./FormsTextInput";
import FormsTextArea from "./FormsTextArea";
import FormsSelect from "./FormsSelect";
import { useGetNomCompletDropDownOption } from "../hooks/useGetNomCompletDropDownOptions";
import { useHandleSubmitFormAjouts } from "../hooks/useHandleSubmitFormAjouts";
import SubmitCarte from "./SubmitCarte";
const CarteAjoutSiminaire = () => {
  const POST_SIMINAIRE_URL = "http://localhost:9000/api/Doctorants/siminaire";

  const { handleSubmitForm, status, clearStatus } =
    useHandleSubmitFormAjouts(POST_SIMINAIRE_URL);

  const dropDownOptions = useGetNomCompletDropDownOption();

  const initialValues = {
    doctorantId: "",
    titre: "",
    animateur: "",
    resume: "",
  };

  const validationSchema = Yup.object().shape({
    doctorantId: Yup.string().required("veuillez vous choisir un doctorant."),
    titre: Yup.string()
      .required("veuillez remplir ce champ."),
    animateur: Yup.string()
      .required("veuillez remplir ce champ."),
    resume: Yup.string()
      .required("veuillez remplir ce champ."),
  });

  return (
    <div
      className="relative w-4/6 md:h-[85%] px-1 py-1 rounded-[50px] bg-gradient-to-r from-[#03C988] to-[#9747FF]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col w-full  bg-white rounded-[45px] md:h-full">
        {status ? (
          <SubmitCarte
            state={status}
            clear={clearStatus}
            titre={
              status === "success"
                ? "Ajout avec succés"
                : " Echec dans l'ajout"
            }
            message={
              status === "success"
                ? "L'ajout du séminaire a été effectuée avec succés."
                : "Désolé , nous n'avons pas pu enregistrer votre inscription veuillez réessayez plus tard, ou contacter l'administrateur pour obtenir de l'aide"
            }
          />
        ) : (
          <>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleSubmitForm(values);
              }}
            >
              <Form className="w-full mt-10 md:px-14">
                <h6 className="mb-4 text-sm">
                  Veuillez remplir les informations du doctorant voulu
                </h6>
                <FormsSelect
                  options={dropDownOptions}
                  name="doctorantId"
                  label="Nom Complet"
                />
                <h3 className="mt-3 text-sm text-left">
                  Information du séminaire a ajouter :
                </h3>
                <div className="mb-6 md:flex md:gap-28">
                  <div>
                    <FormsTextInput name="titre" label="Titre" />
                  </div>
                  <div>
                    <FormsTextInput name="animateur" label="Animateur" />
                  </div>
                </div>
                <div className="mr-32">
                  <FormsTextArea name="resume" label="Resumé" />
                </div>
                <button
                  type="submit"
                  className="absolute right-12 bottom-5  rounded-3xl bg-[#03C988] text-white text-sm px-6 py-2 hover:bg-white hover:text-[#03C988] border border-transparent hover:border-[#03C988]"
                >
                  Confirmer
                </button>
              </Form>
            </Formik>
          </>
        )}
      </div>
    </div>
  );
};

export default CarteAjoutSiminaire;
