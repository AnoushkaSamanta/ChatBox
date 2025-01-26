import React from 'react'

function GenderCheckBox() {
  return (
    <div className='flex m-4 gap-4 text-gray-300'>
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}
        >
            <span className='label-text'>Male</span>
            <input type="checkbox" className='checkbox border-gray-300' />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}
        >
            <span className='label-text'>Female</span>
            <input type="checkbox" className='checkbox border-gray-300' />
        </label>
      </div>

    </div>
  )
}

export default GenderCheckBox
