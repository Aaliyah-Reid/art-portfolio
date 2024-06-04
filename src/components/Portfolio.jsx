import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import {Link} from 'react-router-dom';


const Portfolio = () => {
    const ref = useRef(null);
   

    return (
        <>
        <ul ref={ref} className="portfolio-list">
        {/* <li></li>
        <li></li>
        <li></li>
        <li></li> */}
        <li>
          <Link to="/portfolio/paintings">
            <h3 className='text-white'>Paintings</h3>
          </Link>
        </li>
        <li>
          <Link to="/portfolio/photos">
            <h3 className='text-white'>Photos</h3>
          </Link>
        </li>
        <li>
          <Link to="/portfolio/generative-art">
            <h3 className='text-white'>Generative Art</h3>
          </Link>
        </li>
        <li>
          <Link to="/portfolio/poems">
            <h3 className='text-white'>Poems</h3>
          </Link>
        </li>
          
      </ul>

        </>
    
    );
}

export default Portfolio;
