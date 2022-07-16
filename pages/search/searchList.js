import React from 'react'
import Footer from '../../components/Footer'
import SearchItem from '../../components/SearchItem'
import Navbar from '../../components/Navbar'

export default function SearchList() {
  const searcData = [
    {
      title: 'Stüdyo daire, şehir but',
      image: 'https://i1.adis.ws/i/canon/eos-r-lifestyle_7762546357204f01a68b1855eed714e3?$block-grid-16by9-jpg$',
        price: 252,
        seller: 'Vahid Khan',
        rating: '9.2',
        desc: ' containing Lorem Ipsum passages, and more recently ',
        id: '1',
        location: 'izmir konak'
    },
    {
        title: 'Stüdyo daire, şehir but',
        image: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50431984/original/e480c28a-9174-4ba8-a4c6-3371e8a5b02a.jpeg?im_w=1200',
        price: 525,
        rating: '5.2',
        desc: ' containing Lorem Ipsum passages, and more recently ',
        id: '2',
        location: 'Istanbul Merkez'
    },
    {
      title: 'Stüdyo daire, şehir but',
      image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
        price: 70,
        seller: 'Naweed jan',
        rating: '9.2',
        desc: ' containing Lorem Ipsum passages, and more recently ',
        id: '3',
        location: 'Ankara Mamak'
    }
    ,
    {
      title: 'Stüdyo daire, şehir but',
      image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
        price: 70,
        seller: 'Naweed jan',
        rating: '9.2',
        desc: ' containing Lorem Ipsum passages, and more recently ',
        id: '4',
        location: 'Bursa Yeni mah'
    },
    {
      title: 'Stüdyo daire, şehir but',
      image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
      price: 70,
      seller: 'Naweed jan',
      rating: '9.2',
      desc: ' containing Lorem Ipsum passages, and more recently ',
      id: '4',
      location: 'izmir Buca'
  }, {
    title: 'Stüdyo daire, şehir but',
    image: 'https://i1.adis.ws/i/canon/eos-r-lifestyle_7762546357204f01a68b1855eed714e3?$block-grid-16by9-jpg$',
      price: 252,
      seller: 'Vahid Khan',
      rating: '9.2',
      desc: ' containing Lorem Ipsum passages, and more recently ',
      id: '1',
      location: 'izmir konak'
  },
  {
      title: 'Stüdyo daire, şehir but',
      image: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50431984/original/e480c28a-9174-4ba8-a4c6-3371e8a5b02a.jpeg?im_w=1200',
      price: 525,
      rating: '5.2',
      desc: ' containing Lorem Ipsum passages, and more recently ',
      id: '2',
      location: 'Istanbul Merkez'
  },
  {
    title: 'Stüdyo daire, şehir but',
    image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
      price: 70,
      seller: 'Naweed jan',
      rating: '9.2',
      desc: ' containing Lorem Ipsum passages, and more recently ',
      id: '3',
      location: 'Ankara Mamak'
  }
  ,
  {
    title: 'Stüdyo daire, şehir but',
    image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
      price: 70,
      seller: 'Naweed jan',
      rating: '9.2',
      desc: ' containing Lorem Ipsum passages, and more recently ',
      id: '4',
      location: 'Bursa Yeni mah'
  },
  {
    title: 'Stüdyo daire, şehir but',
    image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
    price: 70,
    seller: 'Naweed jan',
    rating: '9.2',
    desc: ' containing Lorem Ipsum passages, and more recently ',
    id: '4',
    location: 'izmir Buca'
}, {
  title: 'Stüdyo daire, şehir but',
  image: 'https://i1.adis.ws/i/canon/eos-r-lifestyle_7762546357204f01a68b1855eed714e3?$block-grid-16by9-jpg$',
    price: 252,
    seller: 'Vahid Khan',
    rating: '9.2',
    desc: ' containing Lorem Ipsum passages, and more recently ',
    id: '1',
    location: 'izmir konak'
},
{
    title: 'Stüdyo daire, şehir but',
    image: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50431984/original/e480c28a-9174-4ba8-a4c6-3371e8a5b02a.jpeg?im_w=1200',
    price: 525,
    rating: '5.2',
    desc: ' containing Lorem Ipsum passages, and more recently ',
    id: '2',
    location: 'Istanbul Merkez'
},
{
  title: 'Stüdyo daire, şehir but',
  image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
    price: 70,
    seller: 'Naweed jan',
    rating: '9.2',
    desc: ' containing Lorem Ipsum passages, and more recently ',
    id: '3',
    location: 'Ankara Mamak'
}
,
{
  title: 'Stüdyo daire, şehir but',
  image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
    price: 70,
    seller: 'Naweed jan',
    rating: '9.2',
    desc: ' containing Lorem Ipsum passages, and more recently ',
    id: '4',
    location: 'Bursa Yeni mah'
},
{
  title: 'Stüdyo daire, şehir but',
  image: 'https://a0.muscache.com/im/pictures/aaeb7c6d-d481-439f-9f01-26b43c31060f.jpg?im_w=1200',
  price: 70,
  seller: 'Naweed jan',
  rating: '9.2',
  desc: ' containing Lorem Ipsum passages, and more recently ',
  id: '4',
  location: 'izmir Buca'
}
]
  return (
    <div>
     <Navbar />
        <section> 
                 <div className='listResultContainer mt-[150px]'>
                    {
                      searcData.map((item) => (
                        <SearchItem key={item.key}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                         desc={item.desc}
                         seller={item.seller}
                         location={item.location}
                        />
                      ) )
                    }
                 </div> 
        </section>
      <Footer/>
    </div>
  )
}
