import React from 'react'

const JobPost = ({category}) => {
  return (
    <div className='bg-[#F9F9FF] p-3 mx-2 md:p-10'>
       
        <div className='bg-[#EEEDFF] w-10 h-10 flex justify-center items-center p-4 mb-8 rounded-lg'>
        {category.icon}

        </div>
        <h1 className='text-[#474747] font-bold text-base md:text-lg mb-4'>
        {category.title}

        </h1>
        <h1 className='text-[#474747] font-semibold text-base'>

        {category.jobCount}
        </h1>

    </div>
  )
}

export default JobPost