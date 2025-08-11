import { useMediaQuery } from '@mui/material';
import slide1 from '../assets/slide-1.jpeg';
import slide2 from '../assets/slide-2.jpeg';
import slide3 from '../assets/slide-3.jpeg';

function HeroSection() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <>
        {isMobile ? (
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-touch="true"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slide1} className="d-block w-100" style={{ height: "80vh", objectFit: "cover" }} alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src={slide2} className="d-block w-100" style={{ height: "80vh", objectFit: "cover" }} alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src={slide3} className="d-block w-100" style={{ height: "80vh", objectFit: "cover" }} alt="Slide 3" />
              </div>
            </div>
          </div>

        ) : (
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
                
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slide1} className="d-block w-100" alt="Slide 1" style={{ height: '100vh', objectFit: 'cover', objectPosition: "center" }}/>
                </div>
                <div className="carousel-item">
                  <img src={slide2} className="d-block w-100" alt="Slide 2" style={{ height: '100vh', objectFit: 'cover', objectPosition: "center" }}/>
                </div>
                <div className="carousel-item">
                  <img src={slide3} className="d-block w-100" alt="Slide 3" style={{ height: '100vh', objectFit: 'cover', objectPosition: "center" }}/>
                </div>
              </div>
                
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
                
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
        )}
        </>
    )
}

export default HeroSection;