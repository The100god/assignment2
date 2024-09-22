import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row justify-center items-center w-full h-[fit-content] py-2 border-t-2 border-lime-100 bottom-0 fixed'>
      <div className="flex flex-row justify-center items-center w-full h-full" >
        <p className='flex flex-wrap text-wrap text-center font-semibold text-[0.8rem] md:text-[1rem] font-mono'>All rights reserved. Copyright &copy;2024 foodies.com </p>
      </div>
    </div>
  )
}

export default Footer
