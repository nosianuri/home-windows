import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Review({ name, company, review }) {
    const reviewRef = useRef(null);
    useEffect(() => {
        gsap.from(reviewRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        });
      }, []);
  
    return (
      <div className="p-8 border rounded shadow-md" ref={reviewRef}>
        <p className="mb-4 text-lg font-bold !text-red-600">{name}</p>
        <p className="mb-4  !text-green-500">{company}</p>
        <p>{review}</p>
      </div>
    );
  }
  export default Review;