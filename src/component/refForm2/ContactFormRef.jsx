import React, { useRef } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import FormValidator from './FormValidator';
import './ContactForm.css';

const ContactForm = () => {
    // Create refs for each input field
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);

    // Create refs for each error message
    const nameErrorRef = useRef(null);
    const emailErrorRef = useRef(null);
    const phoneErrorRef = useRef(null);
    const messageErrorRef = useRef(null);

    // Use the validation component
    const validateForm = FormValidator({
        nameRef,
        emailRef,
        phoneRef,
        messageRef,
        nameErrorRef,
        emailErrorRef,
        phoneErrorRef,
        messageErrorRef,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const data = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                message: messageRef.current.value,
            };

            fetch('https://your-api-endpoint.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log('Success:', data);
                    // Optionally, clear the form after submission
                    nameRef.current.value = '';
                    emailRef.current.value = '';
                    phoneRef.current.value = '';
                    messageRef.current.value = '';
                })
                .catch((err) => {
                    console.error('Error', err);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField label="Name" type="text" id="name" inputRef={nameRef} errorRef={nameErrorRef} />
            <InputField label="Email" type="email" id="email" inputRef={emailRef} errorRef={emailErrorRef} />
            <InputField label="Phone" type="tel" id="phone" inputRef={phoneRef} errorRef={phoneErrorRef} />
            <TextAreaField label="Message" id="message" inputRef={messageRef} errorRef={messageErrorRef} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
