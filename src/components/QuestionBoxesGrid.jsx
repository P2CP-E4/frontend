import React from 'react';
import QuestionBox from './QuestionBox';

const QuestionBoxGrid = () => {
    return (
        <div className='flex items-start justify-center gap-10'>
            <div className='flex flex-col gap-8'>
                <QuestionBox question="question 1" />
                <QuestionBox question="question 2" />
                <QuestionBox question="question 3" />
                <QuestionBox question="question 4" />
            </div>

            <div className='flex flex-col gap-8'>
                <QuestionBox question="question 5" />
                <QuestionBox question="question 6" />
                <QuestionBox question="question 7" />
                <QuestionBox question="question 8" />
            </div>
            <div className='flex flex-col gap-8'>
                <QuestionBox question="question 9" />
                <QuestionBox question="question 10" />
                <QuestionBox question="question 11" />
                <QuestionBox question="question 12" />

            </div>

        </div>
    )
}

export default QuestionBoxGrid;