import React, { useState } from 'react';
import { HiArrowNarrowRight,HiArrowNarrowLeft } from 'react-icons/hi';

function TestPage(): JSX.Element {
    const [round , setRound]= useState(1);
  return (
    <>
      <div className='flex justify-between flex-col sm:flex-row h-[80vh] mt-3'>
        <div className='bg-gray-300 text-white w-full sm:w-3/12 m-8 ml-16 mr-1 mb-4 sm:mb-0 rounded-2xl'>
          <div className='text-black text-center flex flex-col '>
            <div className='bg-gray-400 m-4 item-center font-bold text-2xl justify-center items-center rounded-full p-4'> Round {round}</div>
           <div className='font-semibold text-lg mt-4'>
            <p> Explain the concept of Virtual DOM in React and how it contributes to performance optimization.</p>
           </div>
           <div className='flex justify-between mt-6 mx-8'>
            <div>
            <button className='bg-blue-600 text-white flex items-center p-2 px-6 rounded-lg'><HiArrowNarrowLeft className='ml-2' /></button>
            </div>
            <div>
            <button className='bg-blue-600 text-white flex items-center p-2 px-6 rounded-lg'><HiArrowNarrowRight className='ml-2' /></button>
            </div>
           </div>
          </div>
        </div>
        <div className='bg-gray-300 text-white w-full sm:w-8/12 m-6 mr-8 rounded-2xl shadow-2xl'>

        <textarea className='border w-full h-full' name="" id="" cols="140" rows="22"></textarea>

        </div>
      </div>

      <div className='flex items-center justify-end mr-10'>
        <button className='bg-blue-600 text-white flex items-center p-2 px-6 rounded-lg'
        onClick={()=>
            setRound(round+1)
        }
        >
          Next <HiArrowNarrowRight className='ml-2' />
        </button>
      </div>
    </>
  );
}

export default TestPage;
