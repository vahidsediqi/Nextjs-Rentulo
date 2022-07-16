import React from 'react'
export default function Categories() {
  return (
    <div className='featured grid lg:grid-cols-3 gap-9 mx-5'>
        <div className='featuredItem'>
           <img className="featuredImage" src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/362853196.jpg?k=44b28af91d7c9851dba783acf04897e99451d93cdf94c141661118ab8581a095&o=&hp=1'/>
           <a href=''>
           <div className='featuredTitle'>
             <h2 className='font-bold text-[25px]'>Real-Estate</h2>
             <h3>152 properties</h3>
           </div>
           </a>
        </div>
        <div className='featuredItem'>
           <img className="featuredImage" src='https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
           <a href='#'>
           <div className='featuredTitle'>
             <h2 className='font-bold text-[25px]'>Automobile</h2>
             <h3>152 properties</h3>
           </div>
           </a>
        </div>

        <div className='featuredItem'>
           <img className="featuredImage" src='https://revenuesandprofits.com/wp-content/uploads/2022/01/Tech-Gadgets.jpg'/>
           <a href='#'>
           <div className='featuredTitle'>
             <h2 className='font-bold text-[25px]'>Electronics</h2>
             <h3>152 properties</h3>
           </div>
           </a>
        </div>

    </div>
  )
}
