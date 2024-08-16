const FormValidator = ({nameRef, emailRef, phoneRef, messageRef, nameErrorRef, emailErrorRef, phoneErrorRef, messageErrorRef}) => {
    let isValid = true;
    if (!nameRef.current || !emailRef.current || !phoneRef.current || !messageRef.current) {
        return false; // Early return if refs are not yet assigned
    }
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

export default FormValidator;