import { Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ClientTestimonials() {
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  // ✅ Example testimonials array
  const testimonials = [
    {
      id: 1,
      name: "Nitin Chopra",
      role: "Senior Manager",
      text: "We appreciate the cooperative spirit and attention to detail that enabled us to streamline the entire project in order to achieve success and meet our goals.",
    },
    {
      id: 2,
      name: "Sujata Naik",
      role: "Homestyling",
      text: "I like all the chairs specially Gavin is lovely. Very happy with the services and coordination is super. Thank you so much for prompt delivery 👌 Keep it up good work 👍",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      role: "CEO, TechFirm",
      text: "Great experience working with the team. Their professionalism and dedication stood out throughout the project.",
    },
  ];

  return (
    <div
      className="client-testinomial p-2 text-center h-auto container"
      data-aos="fade-up"
    >
      <Typography variant={isMobile ? "h4" : "h3"} className="fw-bold">
        Read why our
        <span
          className="fw-bold"
          style={{ color: "#105B63", padding: "0 0.5rem" }}
        >
          clients love us
        </span>
      </Typography>

      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            style={{
              width: isMobile ? "100%" : "30%",
              border: "2px dashed gray",
              borderRadius: "20px",
              padding: "35px",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{ fontWeight: "bold" }}>{t.name}</p>
            <p style={{ fontStyle: "italic", marginBottom: "10px" }}>{t.role}</p>
            <p style={{ fontSize: isMobile ? "3.5vw" : "1vw" }}>{t.text}</p>
            <button className="btn btn-danger w-50 mt-3">Read More</button>
          </div>
        ))}
      </div>

      <hr className="mt-4" />
    </div>
  );
}

export default ClientTestimonials;
