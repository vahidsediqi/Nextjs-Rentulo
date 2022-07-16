import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'
function profile() {
    const userData = [
        {
          title: 'Stüdyo daire, şehir but',
          image: 'https://i1.adis.ws/i/canon/eos-r-lifestyle_7762546357204f01a68b1855eed714e3?$block-grid-16by9-jpg$',
          price: 252,
          orderNumber: '#256-252-152',
          orderDate: '25-11-2022',
          buyer: 'Batu bay'
        },
        {
          title: 'JBL Headphone',
          image: 'https://n11scdn.akamaized.net/a1/602_857/08/46/26/01/IMG-5377573366832504759.jpg',
          price: 252,
          orderNumber: '#256-252-152',
          orderDate: '25-11-2022',
          buyer: 'Batu bay'
        },
        {
          title: 'Airtech Aır 4K Plus 2Gb Ram Airtech Aır ',
          image: 'https://n11scdn.akamaized.net/a1/602_857/08/52/26/26/IMG-8073440358055659482.jpg',
          price: 252,
          orderNumber: '#256-252-152',
          orderDate: '25-11-2022',
          buyer: 'Batu bay'
        },
       
    ]
  return (
    <div>
        <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap" rel="stylesheet"></link>
        </Head>
        <Navbar/>
           <div className='profileWrapper mt-[120px] w-[80%] mx-auto md:p-5 pd-0'>
               {/* user profile data */}
               <div className='userInfo border p-5 rounded-3xl hidden lg:block'>
                  <div className='profilePic-name flex items-center gap-3 my-5'>
                      <img className="h-20 w-20 object-cover rounded-full" src='https://cindria-demo.netlify.app/assets/img/dd.jpg'/>
                      <h3 className='text-[30px] font-[Ubuntu] text-[#333333] font-semibold'>Vahid Bro</h3>
                  </div>
                {/* list wrapper */}
                  <div className='flex flex-col gap-5'>
                    <div className='profileData cursor-pointer'>
                        <Link href={'/'}><span className='flex items-center gap-2 text-[24px] text-[#333333] hover:text-yellow-600'> <ion-icon name="cube-outline"></ion-icon> Account</span></Link>
                    </div>
                    <div className='profileData cursor-pointer'>
                        <Link href={'/'}><span className='flex items-center gap-2 text-[24px] text-[#333333] hover:text-yellow-600'> <ion-icon name="heart-outline"></ion-icon> Favorites</span></Link>
                    </div>
                    <div className='profileData cursor-pointer'>
                        <Link href={'/'}><span className='flex items-center gap-2 text-[24px] text-[#333333] hover:text-yellow-600'> <ion-icon name="documents-outline"></ion-icon> My Ads</span></Link>
                    </div>
                    <div className='profileData cursor-pointer'>
                        <Link href={'/'}><span className='flex items-center gap-2 text-[24px] text-[#333333] hover:text-yellow-600'> <ion-icon name="cash-outline"></ion-icon> Transactions</span></Link>
                    </div>
                    <div className='profileData cursor-pointer'>
                        <Link href={'/'}><span className='flex items-center gap-2 text-[24px] text-[#333333] hover:text-yellow-600'> <ion-icon name="information-circle-outline"></ion-icon> Support</span></Link>
                    </div>
                      <Link href={'/'}>
                        <span className='flex items-center gap-2 text-[24px] cursor-pointer text-red-500 hover:text-yellow-600'>
                            <ion-icon name="log-out-outline"></ion-icon> Logout
                        </span>
                      </Link>
                  </div>
               </div>
               {/* user listing */}
               <div className='userListing font-[Ubuntu] rounded-3xl'>
                <div>
                    <h2 className='text-[29px] font-[Ubuntu] text-[#333333] font-bold mb-5'>Orders</h2>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between mb-5'>
                    <div className="flex items-center bg-gray-100 rounded-xl py-2 md:shadow-sm mb-2 md:mb-auto pr-2">
                         <input type='text' placeholder="search" className="px-5 bg-transparent outline-none "/>
                         <ion-icon name="search-outline"></ion-icon>
                      </div>
                    <div>
                        <select id="Actions" name="Actions" className='outline-0 border rounded-md bg-gray-100 p-1 w-[110px]'>
                            <option value="Select">Action</option>
                            <option value="Approve">Approve</option>
                            <option value="Delete">Delete</option>
                            <option value="Reject">Reject</option>
                        </select>
                    </div> 
                    {/* moderl */}
                       
                    {/* moderl end */}
                </div>
                     {
                        userData.map(data => (
                        <div className='userListingWrapper bg-[#F4F4F4] mb-3 justify-between p-5 rounded-xl flex flex-col md:flex-row items-center' >
                            <div className='pic-data-wrapper flex gap-8 flex-col md:flex-row'>
                               <div className='pic-wrapper flex-4'>
                                   <img className='md:h-[250px] md:w-[273px] w-[100%] h-[220px] object-cover rounded-xl' src={data.image} />
                               </div>
                               <div className='dataWrapper flex flex-col gap-3 flex-1'>
                                  <h2 className='text-[29px] font-[Ubuntu] text-[#333333] font-bold'>{data.title}</h2>
                                  <h2 className='text-[15px] font-[Ubuntu] text-[#333333] font-bold'>{data.buyer}</h2>
                                  <span>€ {data.price}</span>
                                  <span>Order Placed On: <span className='text-gray-500'>{data.orderDate}</span></span>
                                  <div className='actionWrapper'>
                                   <select id="Actions" name="Actions" className='outline-0 border rounded-md border-yellow-500 p-1'>
                                        <option value="Select">Action</option>
                                        <option value="Approve">Approve</option>
                                        <option value="Delete">Delete</option>
                                        <option value="Reject">Reject</option>
                                    </select>
                                  </div>
                               </div>
                            </div>
                            {/* Details and order number */}
                            <div className='flex flex-col'>
                                <span>Order Number: <span className='text-gray-500'> {data.orderNumber}</span></span>
                                <Link href={'/'}><span className='text-yellow-500 cursor-pointer'>View Details</span></Link>
                            </div>
                         </div>
                        ))
                     }
                        {/* Pagenation */}
                          <div class="flex justify-center">
                            <nav aria-label="Page navigation example">
                                <ul class="flex list-style-none">
                                    <li class="page-item"><a
                                        class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                                        href="#">Previous</a></li>
                                    <li class="page-item"><a
                                        class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                        href="#">1</a></li>
                                    <li class="page-item"><a
                                        class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                        href="#">2</a></li>
                                    <li class="page-item"><a
                                        class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                        href="#">3</a></li>
                                    <li class="page-item"><a
                                        class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                        href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    {/* Pagination ends */}
               </div>
           </div>
        <Footer />
    </div>
  )
}

export default profile