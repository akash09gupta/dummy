import React, { useRef, useEffect } from 'react';
import p1 from '../assets/p1.jpeg';
import { Typography, useMediaQuery } from '@mui/material';


const logos = Array(10).fill(p1); // Fill with sample logos

const HorizontalScroll = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const isMobile = useMediaQuery('(max-width:600px)');

  // Function to auto-scroll a container
  const setupAutoScroll = (ref) => {
    let scrollAmount = 0;
    const scrollStep = 200; // pixels
    const delay = 3000; // 3 seconds

    return setInterval(() => {
      const el = ref.current;
      if (!el) return;
      if (scrollAmount + el.offsetWidth >= el.scrollWidth) {
        scrollAmount = 0;
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollAmount += scrollStep;
        el.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }, delay);
  };

  useEffect(() => {
    const interval1 = setupAutoScroll(scrollRef1);
    const interval2 = setupAutoScroll(scrollRef2);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="container-fluid my-5 mt-5">
      <hr />
      {/* <h3 className="text-center mt-5">Architect Clientele</h3> */}
      <Typography variant={isMobile ? "h4" : "h3"} className="mt-5 fw-bold d-flex align-items-center justify-content-center" >
        Architect <span variant={isMobile ? "h4" : "h3"} className="mt-0 fw-bold"  style={{ color: "#EC2227", padding: "0 0.5rem" }}>Clientele</span>
      </Typography>
      <h6 className="text-center p-3">
        JpShopFit has supplied custom furniture solutions to architects and interiors designers for their projects across India over the years.
      </h6>
      <div
        ref={scrollRef1}
        className="d-flex flex-row overflow-auto py-4 px-2 scroll-touch hide-scrollbar "
        style={{
          gap: '2rem',
          backgroundColor: '#e7e7e7',
          whiteSpace: 'nowrap',
          ouchAction: 'pan-x',
          scrollSnapType: 'x mandatory',
        }}
      >
        {logos.map((src, idx) => (
          <div key={idx} className="flex-shrink-0">
            <img
              src={src}
              alt={`Logo ${idx}`}
              style={{
                width: '12rem',
                height: '12rem',
                objectFit: 'contain',
                background: '#fff',
                padding: '10px',
                borderRadius: '5px',
              }}
            />
          </div>
        ))}
      </div>

      <Typography variant={isMobile ? "h4" : "h3"} className="mt-5 fw-bold d-flex align-items-center justify-content-center" >
        Corporate <span variant={isMobile ? "h4" : "h3"} className="mt-0 fw-bold"  style={{ color: "#EC2227", padding: "0 0.5rem" }}>Clientele</span>
      </Typography>
      <h6 className="text-center p-3">
        JpShopFit has supplied custom furniture solutions to architects and interiors designers for their projects across India over the years.
      </h6>
      <div
        ref={scrollRef2}
        className="d-flex flex-row overflow-auto py-4 px-2 scroll-touch hide-scrollbar"
        style={{
          gap: '2rem',
          backgroundColor: '#e7e7e7',
          whiteSpace: 'nowrap',
          scrollSnapType: 'x mandatory',
        }}
      >
        {logos.map((src, idx) => (
          <div key={idx} className="flex-shrink-0">
            <img
              src={src}
              alt={`Logo ${idx}`}
              style={{
                width: '12rem',
                height: '12rem',
                objectFit: 'contain',
                background: '#fff',
                padding: '10px',
                borderRadius: '5px',
              }}
            />
          </div>
        ))}
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default HorizontalScroll;
