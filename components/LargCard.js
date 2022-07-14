import React from 'react'
import Image from 'next/dist/client/image'
export default function LargCard({ img, title, decs, buttonText }) {
  return (
     <section className='relative py-16 cursor-pointer md:w-[75%] mx-auto mt-[55px]'>
         <div className='relative h-96 min-w-[300px]'>
            <Image className='rounded-3xl'
                src={img}
                layout="fill"
                objectFit='cover'
                />
         </div>
         <div className="absolute top-32 left-11 mt-10">
            <h3 className='text-6xl mb-3 w-164 font-semibold'>{title}</h3>
            <p className='text-lg'>{decs}</p>
            <button className='bg-gray-900 text-white py-2 px-12 mt-5 rounded-full'>{buttonText}</button>
         </div>
     </section>
  )
}
