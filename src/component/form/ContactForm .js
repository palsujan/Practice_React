import React,{useState} from 'react';
import '../form/Input.css';
import useFormValidation from './useFormValidation';

const initialState = {
    name: '',
    email: '',
    phone: '',
    message: ''
}
const ContactForm  = () => {
    const {formData, errors, handleChange, handleSubmit, resetForm } = useFormValidation(initialState);
    // const [formData, setFormData] = useState({
    //     name:'',
    //     email:'',
    //     phone:'',
    //     message:''
    
    // });
    // const [errors, setErrors] = useState({});
    // const validate = () =>{
    //     const errors = {};
    //     if(!formData.name){
    //         errors.name = 'Name is required';
    //     }
    //     if(!formData.email){
    //         errors.email = 'Email is required';
    //     }else if(!/\S+@\S+\.\S+/.test(formData.email)){
    //         errors.email = 'Email is invalid';
    //     }
    //     if (!formData.phone) {
    //         errors.phone = 'Phone number is required';
    //       } else if (formData.phone.length < 10) {
    //         errors.phone = 'Phone number must be at least 10 digits';
    //       }
    //       if (!formData.message) {
    //         errors.message = 'Message is required';
    //       }
    //       return errors;

    // }
    // const handleChange = (e) =>{
    //     const {name, value} = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // }
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     const validationErrors = validate();
    //     setErrors(validationErrors);
    //     console.log("Validators", Object.keys(validationErrors).length)
    //     if(Object.keys(validationErrors).length === 0){
    //         console.log('Form Data:', formData);
    //     }
        
    // }
    const onSubmit = async() =>{
        console.log('Form Data:', formData);
        resetForm();
        try{
            const apiEndpoint = 'https://your-api-endpoint.com/submit';
            const response = await fetch(apiEndpoint,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(formData)
            });
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            const responseData = await response.json();
            console.log('Success', responseData);
            // resetForm();
        } catch(error){
            console.log('Error:', error);
        }

    }
  return (
    <div>
        <h1 className='formHeader'>Input Form</h1>
        <form className='formClass' onSubmit={(e)=>handleSubmit(e,onSubmit)}>
            <label>Name:</label>
            <input className='infutform'
                type='text' 
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <label>Email:</label>
            <input className='infutform'
                type='email' 
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
            <label>Phone:</label>
            <input className='infutform'
                type='text' 
                id ='phone'
                name ='phone'
                value={formData.phone}
                onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
            <label>Message</label>
            <textarea className='infutform'
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
            <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default ContactForm;