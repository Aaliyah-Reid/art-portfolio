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
    {/* <div className="p-0 m-0 flex-none w-full sm:w-auto">
        <img src={paper4} alt="About Me" className="max-w-full h-auto md:max-w-[850px] object-contain mt-16" />
    </div> */}
    <div className="relative p-0 m-0 flex-none w-full sm:w-auto">
    <img src={paper4} alt="About Me" className="max-w-full h-auto md:max-w-[850px] object-contain mt-16" />
    <div className="absolute top-0 left-0 w-4/5 h-full flex items-center justify-center">
        <p className="text-customSubTxt  md:max-w-[650px] md:text-2x p-4  ml-64">Hi, I'm Aaliyah Reid, a multidisciplinary artist from Jamaica. My artistic journey began to unfold in 9th grade, 
        but my affinity for creativity has been ingrained in me from a young age. I love painting and graphic design, often exploring the themes of beauty and its nuanced impacts. <br></br> <br></br>Lately,
         I've been diving into Generative art, fascinated by the possibilities it offers through code .Beyond personal expression,
         I’m keen on collaborative ventures to materialize captivating content and designs.</p>
    </div>
</div>
</div>

    );
};

export default About;
