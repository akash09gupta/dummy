import logo from '../assets/logo.jpg';
import { LuUserRound, LuShoppingCart } from "react-icons/lu";
import { useMediaQuery } from '@mui/material';
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const isMobile = useMediaQuery('(max-width:600px)');
    const [hover, setHover] = useState(false);
    return (
        <>
        <div>
          {isMobile ? (
            <nav className="navbar bg-body-light fixed-top" style={{ width: "100%", height: "8rem", backgroundColor:"#f8f9fa" }}>
                <div className="container-fluid d-flex justify-content-between align-items-center px-4">
                  {/* Toggle Button */}
                  {isMobile ? (<button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                    style={{ border: "none" }}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>) : ""
                  }
            
                  {/* Logo */}
                  <a className="navbar-brand m-0">
                    <img src={logo} alt="logo" style={{ height: "4rem" }} />
                  </a>
            
                  {/* Icons */}
                  <div style={{ display: "flex", gap: "1.5rem" }}>
                    <Link to={'/profile'} className="navbar-user-icon">
                      <LuUserRound style={{ color: "black" }} size={30} />
                    </Link>
                    <Link to={'/cart'} className="navbar-cart-icon">
                      <LuShoppingCart style={{ color: "black" }} size={30} />
                    </Link>
                  </div>
            
                  {/* Offcanvas */}
                  <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">JPShopFit</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                  <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            
                          {/* OFFICE */}
                          <li className="nav-item">
                            <button className="btn btn-primary-light mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#officeCollapse" aria-expanded="false" aria-controls="officeCollapse" style={{ width: "100%", textAlign:"start" }}>
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
                                  <button className="btn btn-primary-light mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#homeCollapse" aria-expanded="false" aria-controls="homeCollapse" style={{ width: "100%" , textAlign:"start"}}>
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
                                  <button className="btn btn-primary-light mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#cafeCollapse" aria-expanded="false" aria-controls="cafeCollapse" style={{ width: "100%", textAlign:"start" }}>
                                    CAFE
                                  </button>
                                  <div className="collapse" id="cafeCollapse">
                                    <div className="card card-body">
                                      <p style={{ borderBottom: "1px solid gray" }}>Stool</p>
                                      <p style={{ borderBottom: "1px solid gray" }}>Counter</p>
                                    </div>
                                  </div>
                                </li>
            
                                {/* ABOUT US */}
                                <li className="nav-item">
                                  <button className="btn btn-primary-light mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#aboutCollapse" aria-expanded="false" aria-controls="aboutCollapse" style={{ width: "100%" , textAlign:"start"}}>
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
          ) : (
            //Desktop Navbar
          <nav className="navbar bg-body-light fixed-top" style={{ width: "100%", height: "9rem", backgroundColor:"#f8f9fa"}}>
                        <div className="container-fluid d-flex justify-content-center align-items-top px-4">
            
                          {/* Logo */}
                          <a className="navbar-brand m-0">
                            <img src={logo} alt="logo" style={{ height: "4rem",}} />
                          </a>
            
                          {/* Icons */}
                          <div className="icons" style={{ display: "flex", gap: "1.5rem", marginLeft:"50rem"}}>
                            <Link to={'/profile'} className="navbar-user-icon">
                              <LuUserRound style={{ color: "black" }} size={30} />
                            </Link>
                            <a className="navbar-user-icon">
                              <IoSearch style={{ color:"black" }} size={30}/>
                            </a>
                            <Link to={'/cart'} className="navbar-cart-icon">
                              <LuShoppingCart style={{ color: "black" }} size={30} />
                            </Link>
                          </div>
                          <div className='Menu' style={{}}><br/>
                            <ul style={{listStyle:"none", display:"flex", gap:"1.5rem", fontSize:"large"}}>
                              <Link to={'/office'} style={{textDecoration:"none", color:"black"}}><li>Office <IoIosArrowDown /></li></Link>
                              <Link to={'/'} style={{textDecoration:"none", color:"black"}}><li>Home <IoIosArrowDown /></li></Link>
                              <Link to={'/Cafe'} style={{textDecoration:"none", color:"black"}}><li>Cafe <IoIosArrowDown /></li></Link>
                              <Link to={'/about'} style={{textDecoration:"none", color:"black"}}><li>About Us <IoIosArrowDown /></li></Link>
                            </ul>
                          </div>
                        </div>
                      </nav>
          )}
        </div>
        </>
    )
}

export default NavBar;