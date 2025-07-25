import { FaInstagram, FaPinterest, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5" style={{ backgroundColor: "#e5e5e5" }}>
      <div className="container">
        <div className="row text-start">
          {/* Column 1 */}
          <div className="col-md-4 mb-4">
            <h5>Helpful Links</h5>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>About us</li>
              <li>Looking for a Job?</li>
              <li>Terms Of Service</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>Email : care@JpShopFit.in</p>
            <p>Whatsapp : 8104565285</p>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-4">
            <h5>Corporate Office</h5>
            <p>
              Quercus Rubra Pvt Ltd<br />
              MG Road, Sanjay Place,<br />
              Agra, Uttar Pradesh 282002
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <p className="mb-0">© 2025, JpShopFit</p>
          <div className="d-flex gap-3">
            <FaInstagram />
            <FaPinterest />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
