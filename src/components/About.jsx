// import React from 'react';
// import portfolio_photo1 from '../assets/portfolio_photo1.jpg';
// import paper4 from '../assets/paper4.gif';


// const About = () => {
//     return (
        
//         <div className='flex flex-wrap md:flex-nowrap gap-2 justify-center min-h-screen'>
//             <div className="p-0 m-0 flex-none">
//                 <img src={portfolio_photo1} alt="Me Duh" className="w-[500px] h-[640px]" />
//             </div>
//             <div className="p-0 m-0 flex-none">
//                 <img src={paper4} alt="About Me" className="max-w-[850px] h-[700px]" />
//             </div>
//         </div>
    

//     );

// };

// export default About;

import React from 'react';
import portfolio_photo1 from '../assets/portfolio_photo1.jpg';
import paper4 from '../assets/paper4.gif';

const About = () => {
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center mb-4 p-2">
    <div className="p-0 m-0 flex-none w-full sm:w-auto">
        <img src={portfolio_photo1} alt="Me Duh" className="max-w-full h-auto md:max-w-[500px] object-contain" />
    </div>
    <div className="p-0 m-0 flex-none w-full sm:w-auto">
        <img src={paper4} alt="About Me" className="max-w-full h-auto md:max-w-[850px] object-contain mt-16" />
    </div>
</div>

    );
};

export default About;
