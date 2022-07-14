import React from 'react'

export default function MailList() {
  return (
    <div className='mail bg-yellow-600 text-white md:flex flex-col items-center py-10 gap-2 hidden '>
        <h3 className='text-3xl font-bold'>Save time, save money</h3>
        <span className='text-lg mb-2'>Sign up and we will send the best deals to you</span>
        <form>
        <input className="text-gray-600 border-2 outline-none w-[300px] pl-2 rounded-l-full h-[39px]" type='text' placeholder="Your Email"/>
        <button className='bg-gray-700 text-white py-2 px-8 rounded-r-full'>Subscribe</button>
        </form>
    </div>
  )
}
