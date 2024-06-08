import React from 'react';
import ParallaxText from './ParallaxText';

const Footer = () => {

    const currentYear = new Date().getFullYear();
  
    const footerStyle = {
        backgroundColor: '#ff0066',
        color: '#FBF7F1',
        padding: '20px',
        boxSizing: 'border-box',
        margin: '0 calc(50% - 50vw)', 
        width: '100vw', 
      };
    

      const styleDiv = {
        backgroundColor: '#ff0066',
        width: '100%',
        height: '150px',


      };

      const styleIcons = "text-4xl cursor-pointer transition-transform duration-200 hover:scale-105";

    return (

        <footer style={footerStyle} className='font-cooper-black'>
            <ParallaxText direction={"-100%"}>AJLR ✦ VISUAL ARTIST ✦  </ParallaxText>
            <ParallaxText direction={"-100%"}>PAINTER ✦ CREATIVE ✦ POET ✦  </ParallaxText>

            <div style={styleDiv} className='mt-10'>
              
            <div className="flex mt-4 space-x-4">
                <a href="https://instagram.com/ajlr.art/" target="_blank" rel="noopener noreferrer">
                    <i className={`fa-brands fa-instagram ${styleIcons}`}></i>
                </a>
                <a href="https://pinterest.com/ajlrart/" target="_blank" rel="noopener noreferrer">
                    <i className={`fa-brands fa-square-pinterest ${styleIcons}`}></i>
                </a>
                <a href="https://tiktok.com/@ajlr.art" target="_blank" rel="noopener noreferrer">
                    <i className={`fa-brands fa-tiktok ${styleIcons}`}></i>
                </a>
            </div>
                    

                <p className='text-4xl'>For enquires, please contact:</p>
                <p className='text-5xl underline cursor-pointer transition-transform duration-200 hover:scale-105 origin-left'>aaliyahreidart@gmail.com</p>

                <p className="mt-4">&copy; {currentYear} All Rights Reserved. Designed and developed by Aaliyah Reid.</p>
            </div>
       
         
       </footer>
    );
};

export default Footer;