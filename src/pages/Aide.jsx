import React from "react";
import NavBar from "../components/NavBar";
import QuestionBoxGrid from "../components/QuestionBoxesGrid";
function Aide() {
  return (
    <div className="w-screen h-screen bg-[#F5F5F5] ">
      <NavBar />
      <div className="flex flex-col justify-center ">
        <span className="mt-8 mb-8 text-lg  font-medium text-center text-[#13005A] ">
          {" "}
          Bienvenue dans la page d'aide{" "}
        </span>
        <span className="ml-36 text-xl font-medium mb-5 text-[#00337C]">
          {" "}
          Page d'accueil{" "}
        </span>

        <QuestionBoxGrid />
      </div>
    </div>
  );
}

export default Aide;
