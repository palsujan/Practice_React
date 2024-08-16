import React from 'react'

const TextAreaField = ({label, id, inputRef, errorRef}) => {
  return (
    <div>
        <div className="input-group">
            <label htmlFor='{id}'>{label}:</label>
            <textarea id={id} ref={inputRef}></textarea>
            <span ref={errorRef} style={{ color: 'red', display: 'none' }}></span>
        </div>
    </div>
  )
}

export default TextAreaField