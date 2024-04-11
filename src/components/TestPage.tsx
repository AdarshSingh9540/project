import React, { useState } from 'react';
import { Helper } from './Helper';
import { HiArrowNarrowRight, HiChevronRight, HiChevronLeft } from 'react-icons/hi';

const TestPage: React.FC = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [round, setRound] = useState(1);

    const questions = Helper();

    const handleNext = () => {
        setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    const handlePrevious = () => {
        setRound((prevRound) => (prevRound > 1 ? prevRound - 1 : prevRound));
    };
    

    return (
        <>
            <div className='flex justify-between flex-col sm:flex-row h-[80vh] mt-3'>
                <div className='bg-gray-300 text-white w-full sm:w-3/12 m-8 ml-16 mr-1 mb-4 sm:mb-0 rounded-2xl'>
                    <div className='text-black text-center flex flex-col'>
                        <div className='bg-gray-400 flex items-center justify-center rounded-full p-4 m-4'>
                            <button className='bg-blue-600 text-white flex items-center p-2 px-6 rounded-lg'
                                 onClick={handlePrevious}
                            >
                                <HiChevronLeft />
                            </button>
                            <div className="text-2xl font-bold mx-6">Round {round}</div>
                            <button className='bg-blue-600 text-white flex items-center p-2 px-6 rounded-lg'
                                onClick={() => setRound((prevRound) => prevRound + 1)}
                            >
                                <HiChevronRight />
                            </button>
                        </div>
                        <div className='font-semibold text-lg mt-4'>
                            <p>{questions[questionIndex]}</p>
                        </div>
                        <div className='flex justify-between mt-6 mx-8'>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300 text-white w-full sm:w-8/12 m-6 mr-8 rounded-2xl shadow-2xl'>
                    <textarea className='border w-full h-full text-black p-3 text-lg' name="" id="" cols="140" rows="22"></textarea>
                </div>
            </div>

            <div className='flex items-center justify-end mr-10'>
                <button className='bg-blue-600 text-white flex items-center p-2 px-6 rounded-lg'
                    onClick={handleNext}
                >
                    Next <HiArrowNarrowRight className='ml-2' />
                </button>
            </div>
        </>
    );
};

export default TestPage;
