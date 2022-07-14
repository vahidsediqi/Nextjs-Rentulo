import React from 'react'

function Button(props) {
  return (
    <button className='bg-yellow-600 py-2 px-6 rounded-full text-white'>
        {props.children}
    </button>
  )
}

export default Button