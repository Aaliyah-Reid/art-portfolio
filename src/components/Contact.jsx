import React, { useState } from 'react';
import envelope2 from '../assets/envelope2.gif';
import card1 from '../assets/card.png';

const Contact = () => {

    const [formData, setFormData] =useState({
        firstName: '',
        lastName: '',
        email:'',
        message:'',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data.message);

            setFormData({firstName: '', lastName: '', email: '', message: ''});
        }catch(error){
            console.error('Error:', error);
        }
    };


    const fieldStyle = "border-b border-fieldBorder bg-cardColour focus:outline-none focus:border-customMainTxt px-4 py-2 w-1/2 placeholder-fieldTxt focus:text-focusFieldTxt";


    


    return (
        <div className='flex flex-col md:flex-row  items-center justify-center'>
          <div className='flex flex-col mr-0 w-1/2'>
            <h2 className='text-8xl font-cooper-black mx-0 px-0 mr-0'> Share your vision...</h2>
            <p className='text-xl mt-5 font-roboto-mono max-w-[400px] mr-0'>If you're interested in my work or would like to commission a piece, please don't hesitate to send me a message.
               Whether you have questions about my process, want to discuss inspiration, or simply want to share your thoughts, 
               I'm eager to hear from you! Looking forward to connecting!</p>
          </div>
          <div className=" flex mt-40 mb-40">
            {/* <img
              src={envelope2}
              alt="envelope"
              className="mx-auto h-auto md:max-w-[850px]"
            /> */}
            <div className=" h-auto md:max-w-[1200px]">
              {/* <img src={card1} alt="card" /> */}
              {/* <div className=" inset-0 flex items-center justify-center"> */}
                <form
                  onSubmit={handleSubmit}
                  className=" rounded bg-cardColour border-cardBorder border-8 shadow-md p-8 md:max-w-[1200px]"
                >
                  <div className="mb-4 rounded">
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={fieldStyle}
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={fieldStyle}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${fieldStyle} py-2 w-full`}
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${fieldStyle} py-2 w-full h-32`}
                    />
                  </div>
                  <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-buttonBg text-buttonTxt text-bold rounded-md px-4 py-2 hover:bg-buttonHover transition-colors-transform duration-300-200 hover:scale-105"
                  >
                    Send
                  </button>
                  </div>
                </form>
                
              {/* </div> */}
            </div>
          </div>
        </div>
      );

  
    
    
};

  


export default Contact;