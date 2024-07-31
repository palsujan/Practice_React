import React, { useState } from 'react';


const useFormValidation = (initialState) => {
     const [formData, setFormData] = useState(initialState);
     const [errors, setErrors] = useState({});

     const validate = () =>{
        const errors = {};

        if(!formData.name){
            errors.name = 'Name is required';
        }
        if(!formData.email){
            errors.email = 'Email is required';
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            errors.email = 'Email is invalid';
        }
        if (!formData.phone) {
            errors.phone = 'Phone number is required';
          } else if (formData.phone.length < 10) {
            errors.phone = 'Phone number must be at least 10 digits';
          }
          if (!formData.message) {
            errors.message = 'Message is required';
          }
          return errors;

    }
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const handleSubmit = (e, callback) =>{
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        // console.log("Validators", Object.keys(validationErrors).length)
        if(Object.keys(validationErrors).length === 0){
            // console.log('Form Data:', formData);
            callback();
        }
        
    }
    const resetForm = () => {
        setFormData(initialState);
        setErrors({});
      };

  return {
    formData, errors, handleChange, handleSubmit, resetForm
  };
};

export default useFormValidation;