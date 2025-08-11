import React, { useEffect } from "react";
import { TbMapPinCode } from "react-icons/tb";
import { PiHandshakeFill } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa6";

import { useMediaQuery } from '@mui/material';
import AOS from "aos";

//for further use
// const stats = [
//   {icon: icon label: "5000+ Pincodes" },
//   {icon: icon label: "10000+ Happy Customers" },
//   {icon: icon label: "200+ Projects" },
// ];

const StatsSection = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    useEffect(()=>{
      AOS.init({
        duration: 1000,
      });
      AOS.refresh();
    },[])
  return (
        <>
        {isMobile ? (
            <div className="container my-5" data-aos="fade-up">
      <hr />
      <div
        className="row text-center d-flex justify-content-center align-items-center"
        style={{ height: "35rem"}}
      >
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <TbMapPinCode size={50} />
          <p>5000+ Pincodes</p>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <PiHandshakeFill size={50} />
          <p>10000+ Happy Customers</p>
        </div>
        <div className="col-12 col-md-4">
          <FaRegNewspaper size={50} />
          <p>200+ Projects</p>
        </div>
      </div>
      <hr />
    </div>
        ) : (
            <div className="container my-5" >
      <hr />
      <div
        className="row text-center d-flex justify-content-center align-items-center"
        style={{ height: "16rem" }}
      >
        <div className="col-12 col-md-4 mb-4 mb-md-0" data-aos="fade-up">
          <TbMapPinCode size={50} />
          <p>5000+ Pincodes</p>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0" data-aos="fade-up">
          <PiHandshakeFill size={50} />
          <p>10000+ Happy Customers</p>
        </div>
        <div className="col-12 col-md-4" data-aos="fade-up">
          <FaRegNewspaper size={50} />
          <p>200+ Projects</p>
        </div>
      </div>
      <hr />
    </div>
        )}        
        </>
  );
};

export default StatsSection;
