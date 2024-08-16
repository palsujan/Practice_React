import React from 'react'

const InputField = ({label, type, id, inputRef, errorRef }) => {
//   const styles = {
//     container: {
//         marginBottom: '15px',
//     },
//     label: {
//         display: 'block',
//         marginBottom: '5px',
//         fontWeight: 'bold',
//     },
//     input: {
//         width: '100%',
//         padding: '8px',
//         fontSize: '16px',
//         borderRadius: '4px',
//         border: '1px solid #ccc',
//     }
// };
  return (
    <div>
        <label htmlFor={id} 
        // style={styles.label}
        >{label}:</label>
        <input type={type} id={id} ref={inputRef} 
        // style={styles.input}
        />
        <span ref={errorRef} style={{color:'red', display:'none'}}></span>
    </div>
  )
}

export default InputField;