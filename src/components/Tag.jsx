import React from 'react'

const Tag = ({ tagName, selectTag }) => {
  return (
    <button type='button' className='font-sm bg-gray-300 cursor-pointer mx-2 py-2 px-10 rounded' onClick={() =>
      selectTag(tagName)}>{tagName}</button>
  )
}

export default Tag
