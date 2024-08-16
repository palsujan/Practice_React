import React, { useRef } from 'react'
import InputField from './InputField';

const ContactFormRef = () => {
    //Create refs for each input field
     const nameRef = useRef(null);
     const emailRef = useRef(null);
     const phoneRef = useRef(null);
     const messageRef = useRef(null);

    const handeSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handeSubmit}>
            <InputField label = "Name" type="text" id = "name" inputRef={nameRef}/>
            <InputField label = "Email" type="text" id = "name" inputRef={emailRef}/>
            <InputField label = "Phone" type="text" id = "name" inputRef={phoneRef}/>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea id="message" ref={messageRef}></textarea>
            </div>
            <button type='submit'>Submit</button>
          </form>  
    </div>
  )
}

export default ContactFormRef;