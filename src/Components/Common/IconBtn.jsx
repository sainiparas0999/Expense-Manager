import React from 'react'

const IconBtn = ({
    text,
    onclick,
    children,
    disabled,
    outline=false,
    customClasses,
    type,
}) => {
  return (
    <button 
    className='text-richblack-5'
    disabled={disabled}
    onClick={onclick}
    type={type}>
        {
            children ? (
                <>
                    <span>
                        {text}
                    </span>
                    {children}
                </>
            ) : (text)
        }
    </button>
  )
}

export default IconBtn ;