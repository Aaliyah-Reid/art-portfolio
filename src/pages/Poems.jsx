import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Juice from '../assets/lotties/juice.json';



const Poems = () =>{

  const prevStyle = "cursor-pointer transition-transform duration-200 hover:scale-105";

    return (
        <div className='mt-4 p-4 flex flex-col min-h-[80vh]'>
        <div className="relative flex items-center justify-between mb-10">
        <Link to="/portfolio" className={`back-button font-roboto-mono flex flex-col items-start ${prevStyle}`}>
          <span>← Back to</span>
          <span>Portfolio</span>
        </Link>

          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-cooper-black text-center">Poems</h1>
      </div>


      <div className='mx-auto mt-10'>
          <Lottie loop={true} animationData={Juice} style={{ width: 400, height: 400 }}></Lottie>
        </div>

        <p className='font-roboto-mono mx-auto text-sm md:text-xl lg:text-xl'>Creative juices flowing... Check back soon!</p>

      </div>
    )
}

export default Poems;