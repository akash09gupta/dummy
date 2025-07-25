import p1 from '../assets/p1.jpeg';

const logos = Array(10).fill(p1); // Fill with sample logos

const HorizontalScroll = () => {
  return (
    <div className="container-fluid my-5 mt-5">
        <hr/>
      <h3 className="text-center mt-5">Architect Clientele</h3>
      <p className="text-center">
        JpShopFit has supplied custom furniture solutions to architects and interiors designers for their projects across India over the years.
      </p>
      <div
        className="d-flex flex-row overflow-auto py-4 px-2 scroll-touch"
        style={{
          gap: '2rem',
          backgroundColor: '#e7e7e7',
          whiteSpace: 'nowrap',
          scrollSnapType: 'x mandatory',
        }}
      >
        {logos.map((src, idx) => (
          <div key={idx} className="flex-shrink-0" style={{ scrollBehavior:"smooth"}}>
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
      <hr className='mt-5'/>
    </div>
  );
};

export default HorizontalScroll;
