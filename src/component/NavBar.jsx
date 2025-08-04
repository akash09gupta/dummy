import logo from '../assets/logo.jpg';
import { LuUserRound, LuShoppingCart } from "react-icons/lu";
import { useMediaQuery } from '@mui/material';
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";


function NavBar() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarHeight = scrolled ? "4rem" : "6rem";

  return (
    <div>
      {isMobile ? (
        // ---------------------- Mobile Navbar ----------------------
        <nav
          className="navbar bg-body-light fixed-top"
          style={{
            width: "100%",
            height: "8rem",
            backgroundColor: "#105B63",
          }}
        >
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
              <FiMenu color="white" size={30} />
            </button>

            {/* Logo */}
            <a className="navbar-brand m-0">
              <img src={logo} alt="logo" style={{ height: "4rem" }} />
            </a>

            {/* Icons */}
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link to="/profile"><LuUserRound color="white" size={30} /></Link>
              <Link to="/cart"><LuShoppingCart color="white" size={30} /></Link>
            </div>

            {/* Offcanvas */}
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">JPShopFit</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  {/* Office */}
                  <li className="nav-item">
                    <button
                      className="btn btn-primary-light mb-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#officeCollapse"
                      aria-expanded="false"
                      aria-controls="officeCollapse"
                      style={{ width: "100%", textAlign: "start" }}
                    >
                      OFFICE
                    </button>
                    <div className="collapse" id="officeCollapse">
                      <div className="card card-body">
                        <p style={{ borderBottom: "1px solid gray" }}>Desk</p>
                        <p style={{ borderBottom: "1px solid gray" }}>Chair</p>
                      </div>
                    </div>
                  </li>

                  {/* Home */}
                  <li className="nav-item">
                    <button
                      className="btn btn-primary-light mb-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#homeCollapse"
                      aria-expanded="false"
                      aria-controls="homeCollapse"
                      style={{ width: "100%", textAlign: "start" }}
                    >
                      HOME
                    </button>
                    <div className="collapse" id="homeCollapse">
                      <div className="card card-body">
                        <p style={{ borderBottom: "1px solid gray" }}>Bed</p>
                        <p style={{ borderBottom: "1px solid gray" }}>Sofa</p>
                      </div>
                    </div>
                  </li>

                  {/* Cafe */}
                  <li className="nav-item">
                    <button
                      className="btn btn-primary-light mb-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#cafeCollapse"
                      aria-expanded="false"
                      aria-controls="cafeCollapse"
                      style={{ width: "100%", textAlign: "start" }}
                    >
                      CAFE
                    </button>
                    <div className="collapse" id="cafeCollapse">
                      <div className="card card-body">
                        <p style={{ borderBottom: "1px solid gray" }}>Stool</p>
                        <p style={{ borderBottom: "1px solid gray" }}>Counter</p>
                      </div>
                    </div>
                  </li>

                  {/* About Us */}
                  <li className="nav-item">
                    <button
                      className="btn btn-primary-light mb-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutCollapse"
                      aria-expanded="false"
                      aria-controls="aboutCollapse"
                      style={{ width: "100%", textAlign: "start" }}
                    >
                      ABOUT US
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
      ) : (
        // ---------------------- Desktop Navbar ----------------------
        <nav
          className="navbar fixed-top"
          style={{
            width: "100%",
            height: navbarHeight,
            backgroundColor: "#105B63",
            transition: "height 0.6s ease",
            boxShadow: scrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none"
          }}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center px-4">
            {/* Logo */}
            <a className="navbar-brand m-0 border rounded">
              <img src={logo} alt="logo" style={{ height: scrolled ? "2.5rem" : "4rem", padding:"1px", transition: "transform 0.3s ease"}} />
            </a>

            {/* Menu */}
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                gap: "1.5rem",
                fontSize: "larger",
                marginBottom: "0",
                fontWeight: "bold"
              }}
            >
              <Link to="/office" style={{ textDecoration: "none", color: "white" }}>
                <li className='ak'>Office <IoIosArrowDown /></li>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <li className='ak'>Home <IoIosArrowDown /></li>
              </Link>
              <Link to="/Cafe" style={{ textDecoration: "none", color: "white" }}>
                <li className='ak'>Cafe <IoIosArrowDown /></li>
              </Link>
              <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
                <li className='ak'>About Us <IoIosArrowDown /></li>
              </Link>
            </ul>

            {/* Icons */}
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link to="/profile"><LuUserRound size={30} color="white" /></Link>
              <a><IoSearch size={30} color="white" /></a>
              <Link to="/cart"><LuShoppingCart size={30} color="white" /></Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
