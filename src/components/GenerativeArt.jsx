import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


const GenerativeArt = () =>{
    return (
        <div className='mt-4 p-4'>
           <div className="flex items-center justify-between">
                <Link to="/portfolio" className="back-button">← Back to Portfolio</Link>
                <h2 className="flex-grow text-center text-4xl">Generative Art</h2>
            </div>

        </div>
    )
}

export default GenerativeArt;