import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import {Link} from 'react-router-dom';


const Portfolio = () => {
    const ref = useRef(null);

    // const categoryStyle = 
   

    return (
        <>
        <ul ref={ref} className="portfolio-list ">
        <li className='flex justify-center items-center'>
          <Link to="/portfolio/paintings">
            <h3 className='text-categoriesTxt text-9xl font-cooper-black'>PAINT <br></br> INGS</h3>
          </Link>
        </li>
        <li className='flex justify-center items-center'>
          <Link to="/portfolio/photos">
            <h3 className='text-categoriesTxt  text-9xl font-cooper-black'>PHO <br></br>TOS</h3>
          </Link>
        </li>
        <li className='flex justify-center items-center'>
          <Link to="/portfolio/generative-art">
            <h3 className='text-categoriesTxt  text-9xl font-cooper-black'>GEN. <br></br>ART</h3>
          </Link>
        </li>
        <li className='flex justify-center items-center'>
          <Link to="/portfolio/poems">
            <h3 className='text-categoriesTxt  text-9xl font-cooper-black'>POEMS</h3>
          </Link>
        </li>
          
      </ul>

        </>
    
    );
}

export default Portfolio;
