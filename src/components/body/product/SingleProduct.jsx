import React from 'react'

const SingleProduct = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[300px] h-[430px] m-2 bg-white rounded-md shadow-lg cursor-pointer'>
    <div className='flex flex-col justify-center items-center w-full h-full bg-transparent rounded-md p-1'>
    <div className='flex justify-center items-center w-full h-[45%] bg-transparent border-b-2 border-lime-100 p-2'>
        <img className='w-[45%] h-[95%] hover:scale-105 transition duration-300 ease-in-out' src="https://images.openfoodfacts.net/images/products/301/762/401/0701/front_en.54.400.jpg" alt="p1" />
    </div>
    <div className='flex flex-col justify-center items-center w-full h-[55%] p-2 bg-transparent gap-2'>
        <div className='flex justify-start items-center w-full text-wrap text-2xl font-medium font bg-transparent '>Nutella Ferrero</div>
        <div className='flex flex-row justify-between items-center w-full bg-transparent'>
        <div className='flex flex-col justify-start items-start gap-1 bg-transparent'>
            <span className=' font-semibold py-1 text-[1rem] border-b-2 border-lime-100 bg-transparent'>Category:</span>
            <span className='text-[1rem] font-[400] pl-3 bg-transparent'>Breakfasts</span>
        </div>
        <div className='flex flex-col justify-start items-center gap-1 bg-transparent'>
            <span className=' font-semibold py-1 text-[1rem] border-b-2 border-lime-100 bg-transparent '>Nutrition Grade:</span>
            <span className='text-[1rem] font-[500] bg-transparent border-2 border-lime-400 px-[8px] rounded-full bg-lime-200 capitalize'>e</span>
        </div>
        </div>
        <div className='flex flex-col justify-start items-start bg-transparent'>
            <span className=' font-semibold py-1 text-[1rem] border-b-2 border-lime-100 bg-transparent'>Ingredients: </span>
            <span className='text-[0.9rem] font-[400] bg-transparent pl-3'>sugar, palm oil, hazelnuts, skimmed milk powder, fat reduced cocoa, emulsifier, vanillin</span>

        </div>
    </div>

    </div> 
    </div>
  )
}

export default SingleProduct
