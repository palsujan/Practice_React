import React, {useState} from 'react';
import '../form/Input.css';

const ContactForm3 = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        message:''
     })
     const [errors, setErrors] = useState({})

     const validate = () =>{
        const error = {};
        if(!formData.name){
            error.name = "Name is requred";
        } else if(formData.name.length>2){
            error.name = "Name must be at least 2 characters";
        }
              if(!formData.email){
            error.email = 'Email is required';
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            error.email = 'Email is invalid';
        }
        if (!formData.phone) {
            error.phone = 'Phone number is required';
          } else if (formData.phone.length < 10) {
            error.phone = 'Phone number must be at least 10 digits';
          }
          if (!formData.message) {
            error.message = 'Message is required';
          }
          return error;
     }
     const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
     }
     const handleSubmit = async (e) =>{
        e.preventDefault();
        const validatonErrors = validate();
        // setErrors(validatonErrors);
        if(Object.keys(validatonErrors).length === 0){
            // console.log('Form submitted:', formData);
            // setFormData ({
            //     name:'',
            //     email:'',
            //     phone:'',
            //     message:''
            // })
            setErrors(validatonErrors);
        } else {
            setErrors({});
            try{
                const response = await fetch('https://api.example.com/submit-form', {
                    method:'POST',
                    headers: {
                        'Content-Type': 'applicaton/json'
                    },
                    body:JSON.stringify(formData),
                });
                if(response.ok){
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                      });
                }
            }catch(error){
                console.log('Error:', error);
            }
        }
        
     }

  return (
    <div className='formClass'>
        <form onSubmit={handleSubmit}>
            <input type='text' id='name' name='name' value={formData.name} placeholder='Enter Somthing' onChange={handleChange} className='infutform'/>
            {errors.name && <span className="error">{errors.name}</span>}
            <input type='email' id= 'email' name='email' value={formData.email} placeholder='Enter Somthing' onChange={handleChange} className='infutform'/>
            {errors.email && <span className="error">{errors.email}</span>}
            <input type='phone' id='phone' name='phone' value = {formData.phone} placeholder='Enter Somthing' onChange={handleChange} className='infutform'/>
            {errors.phone && <span className="error">{errors.phone}</span>}
            <textarea type='text' id='message' name='message' value = {formData.message} onChange={handleChange} className='infutform'></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm3