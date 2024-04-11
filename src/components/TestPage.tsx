import React from 'react';

function TestPage(): JSX.Element {
  return (
    <div className='flex justify-between h-[85vh]'>
      <div className='bg-black text-white w-3/12 m-8 ml-16 mr-1  rounded-2xl '>
        left container
      </div>
      <div className='bg-black text-white w-8/12 m-6 rounded-2xl'>Right container</div>
    </div>
  );
}

export default TestPage;
