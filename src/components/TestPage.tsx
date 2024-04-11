import React, { useState } from 'react';
import { HiArrowNarrowRight, HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { interviewRounds } from './Helper';

function TestPage(): JSX.Element {
    const [roundIndex, setRoundIndex] = useState(0); // Current round index
    const [questionIndex, setQuestionIndex] = useState(0); // Current question index

    const handlePreviousRound = () => {
        setRoundIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handleNextRound = () => {
        setRoundIndex(prevIndex => (prevIndex < interviewRounds.length - 1 ? prevIndex + 1 : prevIndex));
        setQuestionIndex(0); // Reset question index when changing round
    };

    // const handlePreviousQuestion = () => {
    //     setQuestionIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    // };

    const handleNextQuestion = () => {
        const currentRoundQuestions = interviewRounds[roundIndex].questions;
        setQuestionIndex(prevIndex => (prevIndex < currentRoundQuestions.length - 1 ? prevIndex + 1 : prevIndex));
    };

    return (
        <>
            <div className='flex justify-between flex-col sm:flex-row h-[80vh] mt-3'>
                <div className='bg-gray-300 text-white w-full sm:w-3/12 m-8 ml-16 mr-1 mb-4 sm:mb-0 rounded-2xl'>
                    <div className='text-black text-center flex flex-col'>
                        <div className='bg-gray-400 flex items-center justify-center rounded-full p-4 m-4'>
                            <button className='bg-blue-600 text-white flex items-center p-2 px-6 rounded-lg' onClick={handlePreviousRound}>
                                <HiChevronLeft />
                            </button>
                            <div className="text-2xl font-bold mx-6">{interviewRounds[roundIndex].round_name}</div>
                            <button className='bg-blue-600 text-white flex items-center p-2 px-6 rounded-lg' onClick={handleNextRound}>
                                <HiChevronRight />
                            </button>
                        </div>
                        <div className='font-semibold text-lg mt-4 p-3'>
                            <p>{interviewRounds[roundIndex].questions[questionIndex]}</p>
                        </div>
                       
                    </div>
                </div>
                <div className='bg-gray-300 text-white w-full sm:w-8/12 m-6 mr-8 rounded-2xl shadow-2xl'>
                    <textarea className='border w-full h-full text-black p-3 text-lg' name="" id="" cols={140} rows={22}></textarea>
                </div>
            </div>
            <div className='flex items-center justify-end mr-10'>
                <button className='bg-blue-600 text-white flex items-center p-2 px-6 rounded-lg' onClick={handleNextQuestion}>
                    Next <HiArrowNarrowRight className='ml-2' />
                </button>
            </div>
        </>
    );
}

export default TestPage;
