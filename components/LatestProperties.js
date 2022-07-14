import React from 'react'

export default function LatestProperties() {
const propData = [
    {
        title: 'Amazing Place for summer',
        image: 'https://a0.muscache.com/im/pictures/miso/Hosting-52670067/original/5f03f119-7f9c-4bd3-bfd4-659996c33af5.jpeg?im_w=1200',
        count: 525
    },
    {
        title: 'Stüdyo daire, şehir merkezine 20 metre',
        image: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50431984/original/e480c28a-9174-4ba8-a4c6-3371e8a5b02a.jpeg?im_w=1200',
        count: 525
    },
    {
        title: 'Havuzlu Zarif ve Ferah Ev Maisonette',
        image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
        count: 525
    },
    {
        title: 'Amazing Place for summer',
        image: 'https://a0.muscache.com/im/pictures/miso/Hosting-52670067/original/5f03f119-7f9c-4bd3-bfd4-659996c33af5.jpeg?im_w=1200',
        count: 525
    },
    {
        title: 'Havuzlu Zarif ve Ferah Ev Maisonette',
        image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
        count: 525
    }
]
  return (
    <div className='pList'>
         {
            propData.map((propItem) => (
                <div className='pListItem'>
                    <img src={propItem.image} className='pListImg rounded-md'/>
                    <div className='pListTitles mt-2'>
                    <h2 className='font-bold'>{propItem.title}</h2>
                    </div>
                </div>
            ))
         }
    </div>
  )
}


