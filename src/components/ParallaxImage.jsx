// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// function ParallaxImage({ src, alt, description, id, distance = 300 }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, distance);

//   return (
//     <section className="image-section">
//       <div ref={ref} className="image-container">
//         <img src={src} alt={alt} className="parallax-image" />
//       </div>
//       <motion.div style={{ y }} className="image-content">
//         {description && (
//           <motion.p className="image-description">{description}</motion.p>
//         )}
//       </motion.div>
//     </section>
//   );
// }

// export default ParallaxImage;


// ParallaxImage.jsx
import React from 'react';

const ParallaxImage = ({ src, alt, description }) => {
  return (
    <section className="image-section">
      <div className="image-container">
        <img src={src} alt={alt} className="parallax-image" />
      </div>
      {description && (
        <div className="image-description-container">
          <p className="image-description">{description}</p>
        </div>
      )}
    </section>
  );
};

export default ParallaxImage;