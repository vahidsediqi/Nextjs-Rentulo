import React from 'react'
export default function RealState() {
    const houses = [
        {
            title: 'Canon EOS 250D BK',
            image: 'https://i1.adis.ws/i/canon/eos-r-lifestyle_7762546357204f01a68b1855eed714e3?$block-grid-16by9-jpg$',
            price: 252,
            seller: 'Vahid Khan',
            rating: '9.2',
            desc: 'Nice camera for all'
        },
        {
            title: 'Stüdyo daire, şehir',
            image: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50431984/original/e480c28a-9174-4ba8-a4c6-3371e8a5b02a.jpeg?im_w=1200',
            price: 525,
            rating: '5.2',
            desc: 'Near Beach nice place to visit'
        },
        {
            title: 'Havuzlu Zarif ve',
            image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
            price: 70,
            seller: 'Naweed jan',
            rating: '9.2',
            desc: 'best place for summar'
        }
        ,
        {
            title: 'Havuzlu Zarif ve',
            image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
            price: 70,
            seller: 'Naweed jan',
            rating: '9.2',
            desc: 'best place for summar'
        }
    ]
  return (
      <div className='fpContainer scrollbar-hide mb-10'>
          {
            houses.map((house) => (
            <div className='fp'>
                <div className='fImageWrapper'>
                    <img src={house.image}/> 
                </div>
                <div className='titleAndStar'>
                <span className='font-bold'>{house.title}</span>
                <span>&#9733; {house.rating}</span>
                </div>
                <a href="#">{house.desc}</a>
                <a className='block font-bold' href='#'>{house.price} /gece</a>

            </div>    
        ))
          }

         
      </div>
  )
}
