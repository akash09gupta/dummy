import { useEffect } from "react";

function Contact() {

   useEffect(() => {
    const updateClassBasedOnScreenSize = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;

      const contact = document.querySelector(".contact");
      const contactObj1 = document.querySelector(".contact-obj1");
      const contactObj2 = document.querySelector(".contact-obj2");
      const contactDetails = document.querySelector(".contact-details");
      const contactForm = document.querySelector(".contact-form");

      if (!contact || !contactObj1 || !contactObj2 || !contactDetails || !contactForm) return;

      if (isMobile) {
        contact.classList.remove('d-flex', 'vh-100');
        contactObj1.classList.remove('w-50');
        contactObj2.classList.remove('w-50', 'p-5', 'justify-content-end');
        contactObj2.classList.add('justify-content-center');
        contactForm.classList.remove('w-75');

        contact.style.flexDirection = 'column';
        contact.style.height = '100%';
        contactObj1.style.width = '100%';
        contactObj2.style.width = '100%';
        contactDetails.style.fontSize = '0.8rem';
        contact.style.padding = '3.5rem';
      } else {
        contact.classList.add('d-flex', 'vh-100');
        contactObj1.classList.add('w-50');
        contactObj2.classList.add('w-50', 'p-5');
        contactForm.classList.add('w-75');
        contactObj2.classList.add('justify-content-end');

        contact.style.padding = '5rem';
      }
    };

    updateClassBasedOnScreenSize();

    window.addEventListener('resize', updateClassBasedOnScreenSize);
    return () => window.removeEventListener('resize', updateClassBasedOnScreenSize);
  }, []);
    return (
        <>
  <section className="contact-section" id="contact" data-aos="fade-up" data-aos-duration="1000">
    <div className="contact d-flex vh-100 w-100">
      <div className="contact-obj1 d-flex w-50 flex-column justify-content-around align-items-center">
        <div className="contact-us d-flex flex-column">
          <p className="contact-heading text-uppercase fs-2">Contact Us</p>
          <p>Whether you have question about our services need support, or want to share your feedback, our dedicated team is here to assist you every step of the way.</p>
        </div>
        <div className="contact-details d-flex">
        <div className="contact-details row">
          <p className="col fw-bold">Email</p>
          <p>jpshopfit@gmail.com</p>
          <p className="col fw-bold">Website</p>
          <p>jpshopfit.com</p>
        </div>
        <div className="contact-details row">
          <p className="col fw-bold">Phone</p>
          <p>+123-475-7800</p>
          <p className="col fw-bold">Location</p>
          <p>123, Anywhere, Noida, Uttar Pradesh</p>
        </div>
      </div>
    </div>
      <div className="contact-obj2 w-50 p-5 d-flex justify-content-end align-items-center rounded-3 ">
        <form action="#" method="post" className="w-75 contact-form">
          <p className="contact-heading fs-3 fw-normal">Get in Touch.</p>
          <label className="contact-labels fw-normal">Your Name</label>
          <input className="form-control" type="text"/>
          <label className="contact-labels fw-normal">Email Address</label>
          <input className="form-control" type="email"/>
          <label className="contact-labels fw-normal">Phone Number</label>
          <input className="form-control" type="number"/>
          <label className="contact-labels fw-normal">Message</label>
          <textarea className="form-control" type="textarea"></textarea>
          <input type="submit" className="btn btn-primary w-25 mt-3 fw-normal" value="Submit" />
        </form>
      </div>
    </div>
  </section>
        </>
    )
}
export default Contact;