import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const formRef = useRef(null);

  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [showPopUp, setShowPopUp] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        console.log('SUCCESS!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
        setShowPopUp(true);
      },
      (error) => {
        console.log('FAILED...', error.text);
        console.log( import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID)
      },
    );
  };
  


    const fieldStyle = "border-b border-fieldBorder bg-cardColour focus:outline-none focus:border-customMainTxt px-4 py-2 w-1/2 placeholder-fieldTxt focus:text-focusFieldTxt";
   

    return (
    
        <div className="flex flex-col md:flex-row items-center justify-center relative">
          {/* Render the pop-up if showPopup is true */}
          {showPopUp && (
          <div className="fixed inset-0 backdrop-blur backdrop-filter bg-black/50 flex justify-center items-center z-50">
              <div className="bg-customBg p-12 rounded-lg relative">
                <div className="absolute top-2 right-2 cursor-pointer" onClick={() => setShowPopUp(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <p className="text-lg font-bold">Email sent successfully! I'll be in touch with you soon.</p>
              </div>
            </div>
          )}



        <div className='flex flex-col md:flex-row  items-center justify-center'>
          <div className='flex flex-col mr-0 w-1/2'>
            <h2 className='text-8xl font-cooper-black mx-0 px-0 mr-0'> Share your vision...</h2>
            <p className='text-xl mt-5 font-roboto-mono max-w-[400px] mr-0'>If you're interested in my work or would like to commission a piece, please don't hesitate to send me a message.
               Whether you have questions about my process, want to discuss inspiration, or simply want to share your thoughts, 
               I'm eager to hear from you! Looking forward to connecting!</p>
          </div>
          <div className=" flex mt-40 mb-40">
           
            <div className=" h-auto md:max-w-[1200px]">
             
                <form
                ref={formRef}
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
                        required
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={fieldStyle}
                        required
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
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${fieldStyle} py-2 w-full h-32`}
                      required
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
              
            </div>
          </div>
        </div>
        </div>
      );

  
    
    
};

  


export default Contact;