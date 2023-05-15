import React from 'react'
import NavBar from '../components/NavBar'
import QuestionBoxGrid from '../components/QuestionBoxesGrid';
function Aide() {
  return (
    <div className='w-full h-full bg-[#F5F5F5] '>
      <NavBar />
      <div className='flex flex-col justify-center '>
        <span className='mt-8 mb-8 text-lg  font-medium text-center text-[#13005A] '> Bienvenue dans la page d'aide </span>
        <QuestionBoxGrid />
      </div >
    </div>
  )
}

export default Aide;