import Image from "next/dist/client/image"
export default function SmallCard({img, location, distance}) {
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
    
    <div className="flex items-center space-x-4 m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 translate transform duration-200 ease-out">
       <div className="relative h-16 w-16">
          <Image className="rounded-lg" src={img} layout="fill"/>
       </div>
       <div className="">
         <h2>{location}</h2>
         <h3>{distance}</h3>
       </div> 
       
    </div>
  )
}
