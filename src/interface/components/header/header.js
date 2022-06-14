import React from 'react'

export default function Header() {
  return (
    <header
    className='h-[40px] flex justify-center align-middle items-center'
    >

            <div className='text-lg ml-6 font-extrabold '>
                    Logo
            </div>
            <div className='flex-grow'></div>
            <div className='m-4'>
                    <button className='bg-blue-600 px-6 rounded-md  duration-1000  transition-all first-letter:transition-all  font-bold hover:first-letter:text-xl  hover:bg-blue-500' >Accueil</button>
            </div>


    </header>
  )
}
