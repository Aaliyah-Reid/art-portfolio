// import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import ParallaxImage from './ParallaxImage';
// import ScrollProgressBar from './ScrollProgressBar';
// import { paintings } from './PaintingsData';


// const Paintings = () =>{
//     return (
//         <div className='mt-4 p-4'>
//            <div className="flex items-center justify-between">
//                 <Link to="/portfolio" className="back-button">← Back to Portfolio</Link>
//                 <h2 className="flex-grow text-center text-4xl">Paintings</h2>
//             </div>
//             <div>
//             {paintings.map((painting) => (
//             <ParallaxImage 
//             key={painting.id}
//             // src={`/assets/paintings/${painting.id}.jpg`}
//             src={new URL(`../assets/paintings/${painting.id}.jpg`, import.meta.url).href}
//             alt={painting.title}
//             description={`${painting.title} - ${painting.description}`}
//             />
//             ))}
//             <ScrollProgressBar />
  
//             </div>

//         </div>
//     )
// }

// export default Paintings;


import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxImage from './ParallaxImage';
import ScrollProgressBar from './ScrollProgressBar';
import { paintings } from './PaintingsData';

const Paintings = () => {

  const prevStyle = " cursor-pointer transition-transform duration-200 hover:scale-105";

  return (
    <div className='mt-4 p-4'>
      <div className="relative flex items-center justify-between mb-10">
      <Link to="/portfolio" className={`back-button font-roboto-mono ${prevStyle}`}>
          ← Back to Portfolio
        </Link>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-cooper-black">Paintings</h1>
    </div>
      <div>
        {paintings.map((painting) => (
          <ParallaxImage
            key={painting.id}
            id={painting.id}
            // src={`/assets/paintings/${painting.id}.jpg`}
            src={new URL(`../assets/paintings/${painting.id}.jpg`, import.meta.url).href}
            alt={painting.title}
            description={`${painting.title} - ${painting.description}`}
          />
        ))}
        {/* <ScrollProgressBar /> */}
      </div>
    </div>
  );
}

export default Paintings;