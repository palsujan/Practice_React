import React, { useRef } from 'react';
import InputField from '../InputField';

function ContactForm() {
    // Create refs for each input field
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Access the values of the input fields using refs
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const message = messageRef.current.value;

        // Display the form data (in real use, you'd likely send this to a server)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);

        // Optionally, clear the form after submission
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        messageRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField label="Name" type="text" id="name" inputRef={nameRef} />
            <InputField label="Email" type="email" id="email" inputRef={emailRef} />
            <InputField label="Phone" type="tel" id="phone" inputRef={phoneRef} />
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" ref={messageRef} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
