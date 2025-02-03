import React from 'react'

const Tag = (props) => {    
    return (
    <button className='font-sm bg-gray-200 cursor-pointer mx-2 py-2 px-10 rounded'>{props.tagName}</button>
  )
}

export default Tag
