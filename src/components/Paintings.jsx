import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


const Paintings = () =>{
    return (
        <div className='mt-4 p-4'>
           <div className="flex items-center justify-between">
                <Link to="/portfolio" className="back-button">← Back to Portfolio</Link>
                <h2 className="flex-grow text-center text-4xl">Paintings</h2>
            </div>
            <div>
                
            </div>

        </div>
    )
}

export default Paintings;