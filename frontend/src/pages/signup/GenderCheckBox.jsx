import React from 'react'

function GenderCheckBox( {onCheckboxChange,selectedGender}) {
  return (
    <div className='flex m-4 gap-4 text-gray-300'>
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender==="male"?"selected":""}`}
        >
            <span className='label-text'>Male</span>
            <input type="checkbox" className='checkbox border-gray-300' checked={selectedGender==="male"} onChange={()=>onCheckboxChange("male")}/>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender==="female"?"selected":""}`}
        >
            <span className='label-text'>Female</span>
            <input type="checkbox" className='checkbox border-gray-300'  checked={selectedGender==="female"} onChange={()=>onCheckboxChange("female")} />
        </label>
      </div>

    </div>
  )
}

export default GenderCheckBox
