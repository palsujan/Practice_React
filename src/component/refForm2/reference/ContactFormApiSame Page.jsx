import React, { useRef } from 'react'
import InputField from '../InputField';
import './ContactForm.css'; 

const ContactFormRef = () => {

    //Create refs for each input field
     const nameRef = useRef(null);
     const emailRef = useRef(null);
     const phoneRef = useRef(null);
     const messageRef = useRef(null);

     //Create refs for each error message

    const nameErrorRef = useRef(null);
    const emailErrorRef = useRef(null);
    const phoneErrorRef = useRef(null);
    const messageErrorRef = useRef(null);



    const ValidateForm = () =>{
        let isValid = true;
        //Validate inputs using refs

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const message = messageRef.current.value;

        if(!name.trim()){
            nameErrorRef.current.textContent ="Name is required";
            nameErrorRef.current.style.display = 'block';
            isValid = false;
        } else {
            nameErrorRef.current.style.display = 'none';
        }

        if(!email.trim()){
            emailErrorRef.current.textContent = "Email is required";
            emailErrorRef.current.style.display = 'block';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)){
            emailErrorRef.current.textContent = "Email address is invalid";
            emailErrorRef.current.style.display ='block';
            isValid = false;
        } else {
            emailErrorRef.current.style.display = 'none'
        }

        if (!phone.trim()) {
            phoneErrorRef.current.textContent = 'Phone number is required';
            phoneErrorRef.current.style.display = 'block';
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            phoneErrorRef.current.textContent = 'Phone number must be 10 digits';
            phoneErrorRef.current.style.display = 'block';
            isValid = false;
        } else {
            phoneErrorRef.current.style.display = 'none';
        }

        if (!message.trim()) {
            messageErrorRef.current.textContent = 'Message is required';
            messageErrorRef.current.style.display = 'block';
            isValid = false;
        } else {
            messageErrorRef.current.style.display = 'none';
        }

        return isValid;
    }

    const handeSubmit = (e) =>{
        e.preventDefault();

        if(ValidateForm()){
            // const data = {name, email, phone, message}

             const data = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                message: messageRef.current.value,
            };
        

        fetch('https://your-api-endpoint.com/submit',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('Success:', data);
             //Optionaly, clear the form after submission
            nameRef.current.value = "";
            emailRef.current.value = "";
            phoneRef.current.value = "";
            messageRef.current.value = "";
        })
        .catch(err=>{
            console.error('Error',err)
        });
    }
     



       
    };
  return (
    <div>
        <form onSubmit={handeSubmit}>
            <InputField label = "Name" type="text" id = "name" inputRef={nameRef} errorRef={nameErrorRef}/>
            <InputField label = "Email" type="email" id = "name" inputRef={emailRef} errorRef = {emailErrorRef}/>
            <InputField label = "Phone" type="tel" id = "name" inputRef={phoneRef} errorRef={phoneErrorRef}/>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea id="message" ref={messageRef} ></textarea>
                <span ref={messageErrorRef} style={{color:'red', display:'none'}}></span>
            </div>
            <button type='submit'>Submit</button>
          </form>  
    </div>
  )
}

export default ContactFormRef;