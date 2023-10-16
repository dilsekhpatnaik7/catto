import React from 'react'

const Cat = (props) => {
  return (
    <div>
        <div className="w-auto h-auto">
            <img src={props.url} alt={props.url} className='rounded-2xl shadow-gray-800 shadow-xl'/>
      </div>
    </div>
  )
}

export default Cat
