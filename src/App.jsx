import React from 'react';
import RedOakLogo from './assets/RedOakLogo.png';
import { LuUserRound, LuShoppingCart } from "react-icons/lu";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import slide1 from './assets/slide-1.jpeg';
import slide2 from './assets/slide-2.jpeg';
import slide3 from './assets/slide-3.jpeg';
import { useMediaQuery } from '@mui/material';

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      {isMobile ? (
        <div style={{ width: "100%", height: "100vh" }}>
          {/* Navbar */}
          <nav className="navbar bg-body-light fixed-top" style={{ width: "100%", height: "8rem" }}>
            <div className="container-fluid d-flex justify-content-between align-items-center px-4">
              {/* Toggle Button */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
                style={{ border: "none" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Logo */}
              <a className="navbar-brand m-0">
                <img src={RedOakLogo} alt="logo" style={{ height: "4rem" }} />
              </a>

              {/* Icons */}
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <a className="navbar-user-icon">
                  <LuUserRound style={{ color: "black" }} size={30} />
                </a>
                <a className="navbar-cart-icon">
                  <LuShoppingCart style={{ color: "black" }} size={30} />
                </a>
              </div>

              {/* Offcanvas */}
              <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                    {/* OFFICE */}
                    <li className="nav-item">
                      <button className="btn btn-primary-light mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#officeCollapse" aria-expanded="false" aria-controls="officeCollapse" style={{ width: "100%" }}>
                        OFFICE
                      </button>
                      <div className="collapse" id="officeCollapse">
                        <div className="card card-body">
                          <p style={{ borderBottom: "1px solid gray" }}>Desk</p>
                          <p style={{ borderBottom: "1px solid gray" }}>Chair</p>
                        </div>
                      </div>
                    </li>

                    {/* HOME */}
                    <li className="nav-item">
                      <button className="btn btn-primary-light mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#homeCollapse" aria-expanded="false" aria-controls="homeCollapse" style={{ width: "100%" }}>
                        HOME
                      </button>
                      <div className="collapse" id="homeCollapse">
                        <div className="card card-body">
                          <p style={{ borderBottom: "1px solid gray" }}>Bed</p>
                          <p style={{ borderBottom: "1px solid gray" }}>Sofa</p>
                        </div>
                      </div>
                    </li>

                    {/* CAFE */}
                    <li className="nav-item">
                      <button className="btn btn-primary-light mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#cafeCollapse" aria-expanded="false" aria-controls="cafeCollapse" style={{ width: "100%" }}>
                        CAFE
                      </button>
                      <div className="collapse" id="cafeCollapse">
                        <div className="card card-body">
                          <p style={{ borderBottom: "1px solid gray" }}>Stool</p>
                          <p style={{ borderBottom: "1px solid gray" }}>Counter</p>
                        </div>
                      </div>
                    </li>

                    {/* B2B */}
                    <li className="nav-item">
                      <button className="btn btn-primary-light mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#b2bCollapse" aria-expanded="false" aria-controls="b2bCollapse" style={{ width: "100%" }}>
                        B2B
                      </button>
                      <div className="collapse" id="b2bCollapse">
                        <div className="card card-body">
                          <p style={{ borderBottom: "1px solid gray" }}>Bulk Orders</p>
                          <p style={{ borderBottom: "1px solid gray" }}>Corporate Clients</p>
                        </div>
                      </div>
                    </li>

                    {/* ABOUT US */}
                    <li className="nav-item">
                      <button className="btn btn-primary-light mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#aboutCollapse" aria-expanded="false" aria-controls="aboutCollapse" style={{ width: "100%" }}>
                        About Us
                      </button>
                      <div className="collapse" id="aboutCollapse">
                        <div className="card card-body">
                          <p style={{ borderBottom: "1px solid gray" }}>Our Story</p>
                          <p style={{ borderBottom: "1px solid gray" }}>Contact</p>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section (Carousel) */}
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: "8rem" }}>
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

          {/* Furniture Categories */}
          <div className="container-md" style={{ height: "50rem", borderBottom: "3px solid gray", display: "grid", justifyContent: "center", alignItems: "center" }}>
            {[slide1, slide2, slide3, slide3].map((img, idx) => (
              <div
                key={idx}
                style={{
                  width: "7rem",
                  height: "7rem",
                  border: "3px solid gray",
                  borderRadius: "50%",
                  margin: "0.5rem",
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
            ))}
          </div>

          {/* Spacer */}
          <div className="container-md" style={{ height: "50rem" }}></div>
        </div>
      ) : (
        <div>Something wrong!</div>
      )}
    </>
  );
}

export default App;
