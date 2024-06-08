import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


const GenerativeArt = () =>{
    return (
        <div className='mt-4 p-4'>
        <div className="relative flex items-center justify-between mb-10">
          <Link to="/portfolio" className="back-button font-roboto-mono">← Back to Portfolio</Link>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-cooper-black">Generative Art</h1>
      </div>
      </div>
    )
}

export default GenerativeArt;