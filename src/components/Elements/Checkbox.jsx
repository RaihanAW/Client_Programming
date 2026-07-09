import React from 'react'

function Checkbox(props) {
    const {label, id, ...rest} = props;
  return (
    <>
        <input
            className="text-sm accent-primary"
            id={id}
            {...rest}
        />
        <label 
            htmlFor={id} 
            className="text-sm text-gray-01 dark:text-gray-300 mb-2">
            {label}
        </label>
    </>
  )
}

export default Checkbox