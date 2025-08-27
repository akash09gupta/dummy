import { Typography, useMediaQuery } from '@mui/material'
import React, { Component, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// const testimonialsList = [
//     {id: 1,
//     text: "I like all the chairs specially Gavin is lovely. Very happy with the services and coordination is super. Thank you so much for  prompt delivery 👌 Keep it up good work👍",
//     author: "Sujata Naik, Homestyling"
//     },
//     {id: 2,
//     text: "I like all the chairs specially Gavin is lovely. Very happy with the services and coordination is super. Thank you so much for  prompt delivery 👌 Keep it up good work👍",
//     author: "Sujata Naik, Homestyling"
//     }
// ]

function ClientTestimonials() {
        const isMobile = useMediaQuery('(max-width:600px)');
        useEffect(()=>{
            AOS.init({
                duration: 1000,
            });
            AOS.refresh();
        },[])
    return (
      <div className='client-testinomial p-2 text-center h-auto container' data-aos="fade-up"> 
            <Typography variant={isMobile ? "h4" : 'h3' } className="fw-bold">
              Read why our<span variant={isMobile ? "h4" : 'h3'} className="fw-bold"  style={{ color: "#105B63", padding: "0 0.5rem" }}>clients love us</span>
            </Typography>
        {/* <div className='feedback h-75 w-100 p-4 text-center row'>
            <div className='testinomial w-100 p-5 h-50 col'>
                <Typography variant='h6' textAlign={"left"} fontSize={15.4}>I like all the chairs specially Gavin is lovely. Very happy with the services and coordination is super. Thank you so much for  prompt delivery 👌 Keep it up good work👍</Typography>
                <div className='d-flex w-100 h-50 justify-content-end align-items-center p-2'>
                <hr className='w-25 border border-dark'/>
                <Typography variant='h6' className='d-flex ms-2' fontSize={12}>
                    Sujata Naik, Homestyling
                </Typography>
                </div>
            </div>
            <div className='testinomial w-100 p-5 h-50 col'>
                <Typography variant='h6' textAlign={"left"} fontSize={15.4}>I like all the chairs specially Gavin is lovely. Very happy with the services and coordination is super. Thank you so much for  prompt delivery 👌 Keep it up good work👍</Typography>
                <div className='d-flex w-100 h-50 justify-content-end align-items-center p-2'>
                <hr className='w-25 border border-dark'/>
                <Typography variant='h6' className='d-flex ms-2' fontSize={12}>
                    Sujata Naik, Homestyling
                </Typography>
                </div>
            </div>
        </div> */}
        <div className='d-flex gap-3'>
        <div
        className=''
        style={{width: "30vw", height: "65vh", border: "2px solid black", borderStyle:"dashed", borderColor:"gray", borderRadius:"20px", marginTop:"15px",
            display: "flex", flexDirection:"column", textAlign:"left", padding:"35px"
        }}
        >
            <p>Nitin Chopra</p>
            <p>Senior Manager</p>
            <p>We appreciate the cooperative spirit and attention to detail that enabled us to streamline the entire project in order to achieve success and meet our goals.</p>
            <p>We appreciate the cooperative spirit and attention to detail that enabled us to streamline the entire project in order to achieve success and meet our goals.</p>
            <p className='btn btn-danger w-50'>Read More</p>
        </div>
        <div
        className=''
        style={{width: "30vw", height: "65vh", border: "2px solid black", borderStyle:"dashed", borderColor:"gray", borderRadius:"20px", marginTop:"15px",
            display: "flex", flexDirection:"column", textAlign:"left", padding:"35px"
        }}
        >
            <p>Nitin Chopra</p>
            <p>Senior Manager</p>
            <p>We appreciate the cooperative spirit and attention to detail that enabled us to streamline the entire project in order to achieve success and meet our goals.</p>
            <p>We appreciate the cooperative spirit and attention to detail that enabled us to streamline the entire project in order to achieve success and meet our goals.</p>
            <p className='btn btn-danger w-50'>Read More</p>
        </div>
        <div
        className=''
        style={{width: "30vw", height: "65vh", border: "2px solid black", borderStyle:"dashed", borderColor:"gray", borderRadius:"20px", marginTop:"15px",
            display: "flex", flexDirection:"column", textAlign:"left", padding:"35px"
        }}
        >
            <p>Nitin Chopra</p>
            <p>Senior Manager</p>
            <p>We appreciate the cooperative spirit and attention to detail that enabled us to streamline the entire project in order to achieve success and meet our goals.</p>
            <p>We appreciate the cooperative spirit and attention to detail that enabled us to streamline the entire project in order to achieve success and meet our goals.</p>
            <p className='btn btn-danger w-50'>Read More</p>
        </div>
        </div>
        <hr />
      </div>
    )
}

export default ClientTestimonials;
