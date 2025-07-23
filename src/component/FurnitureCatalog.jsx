import slide1 from '../assets/slide-1.jpeg';
import slide2 from '../assets/slide-2.jpeg';
import slide3 from '../assets/slide-3.jpeg';

import { useMediaQuery } from '@mui/material';

const categories = [
  { img: slide1, label: "Home Lounge Chairs" },
  { img: slide2, label: "Dining Chairs" },
  { img: slide3, label: "Bar Stools" },
  { img: slide1, label: "Casual Chairs" },
  { img: slide2, label: "Sofas" },
  { img: slide3, label: "Office Lounge Chairs" },
  { img: slide1, label: "Mesh Chairs" },
  { img: slide2, label: "Boss Chairs" }
];

function FurnitureCatalog() {
  const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <>
        {isMobile ? (
          <div className="container py-5">
        <div className="row text-center">
          {categories.map((item, idx) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={idx}>
              <div
                className="mx-auto border rounded-circle"
                style={{
                  width: "120px",
                  height: "120px",
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p className="mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
        ) : (
          <div className="container py-5">
        <div className="row text-center">
          {categories.map((item, idx) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={idx}>
              <div
                className="mx-auto rounded-circle"
                style={{
                  width: "12rem",
                  height: "12rem",
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border:"3px solid #e5e5e5"
                }}
              ></div>
              <p className="mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
        )}
        </>
    )
}

export default FurnitureCatalog;