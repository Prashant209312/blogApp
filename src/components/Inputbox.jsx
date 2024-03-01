import React from 'react'

export const Inputbox = ({ name, type, placeholder, defaultValue, id, icon }) => {
    return (
        <div className='relative w-[100%] mb-4'>
            <input name={name} placeholder={placeholder} type={type} defaultValue={defaultValue} id={id} className='input-box ' />
            <i className={"fi " + icon + " input-icon"} />
        </div>
    )
}
