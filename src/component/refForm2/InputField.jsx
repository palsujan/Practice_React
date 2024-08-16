import React from 'react'

const InputField = ({label, type, id, inputRef }) => {
  return (
    <div>
        <label htmlFor={id}>{label}:</label>
        <input type={type} id={id} ref={inputRef}/>
    </div>
  )
}

export default InputField;