import { HeartIcon, LocationMarkerIcon, MapIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'

export default function SearchItem({title,image,price,rating,desc, location, seller }) {

  return (
    <div className='searchItem mt-10'>
        <div className='seachItemInner'>
           <div className='searchItemImageWrapper'>
              <img src={image}/>
           </div>
           <div className='searchItemContent'>
              <div className='title-rating'>
                 <span className='title font-bold text-[18px]'>{title}</span>
                 <span>{rating} &#9733; </span>
              </div>
              <h2>{desc}</h2>
              <span className='font-bold'>{price} €</span>
           </div>
        </div>
    </div>
  )
}
