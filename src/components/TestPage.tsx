import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function TestPage(): JSX.Element {
  return (
    <>
      <div className='flex justify-between flex-col sm:flex-row h-[80vh] mt-3'>
        <div className='bg-gray-300 text-white w-full sm:w-3/12 m-8 ml-16 mr-1 mb-4 sm:mb-0 rounded-2xl'>
          left container
        </div>
        <div className='bg-gray-300 text-white w-full sm:w-8/12 m-6 mr-8 rounded-2xl'>
          Right container
        </div>
      </div>

      <div className='flex items-center justify-end mr-10'>
        <button className='bg-blue-600 text-white flex items-center p-2 px-6 rounded-lg'>
          Next <HiArrowNarrowRight className='ml-2' />
        </button>
      </div>
    </>
  );
}

export default TestPage;
