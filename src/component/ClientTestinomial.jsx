import { Typography, useMediaQuery } from '@mui/material'
import React, { Component } from 'react'

function ClientTestinomial() {
        const isMobile = useMediaQuery('(max-width:600px)');
    return (
      <div className='client-testinomial p-2 h-auto container'> 
        <div className='feedback h-75 w-100 p-4 text-center row'>
            {/* <Typography variant={isMobile ? "h4" : 'h3'} sx={{ fontWeight: 'light' }}>Client Testimonials</Typography> */}
            <Typography variant={isMobile ? "h4" : 'h3' } className="fw-bold">
              Client <Typography variant={isMobile ? "h4" : 'h3'} className="fw-bold"  style={{ color: "#EC2227", padding: "0 0.5rem" }}>Testimonials</Typography>
            </Typography>
            <div className='testinomial w-50 p-5 h-auto col'>
                <Typography variant='h6' textAlign={"left"} fontSize={15.4}>I like all the chairs specially Gavin is lovely. Very happy with the services and coordination is super. Thank you so much for  prompt delivery 👌 Keep it up good work👍</Typography>
                <div className='d-flex w-100 h-50 justify-content-end align-items-center p-2'>
                <hr className='w-25 border border-dark'/>
                <Typography variant='h6' className='d-flex ms-2' fontSize={12}>
                    Sujata Naik, Homestyling
                </Typography>
                </div>
            </div>
            <div className='testinomial w-50 p-5 h-auto col'>
                <Typography variant='h6' textAlign={"left"} fontSize={15.4}>I like all the chairs specially Gavin is lovely. Very happy with the services and coordination is super. Thank you so much for  prompt delivery 👌 Keep it up good work👍</Typography>
                <div className='d-flex w-100 h-50 justify-content-end align-items-center p-2'>
                <hr className='w-25 border border-dark'/>
                <Typography variant='h6' className='d-flex ms-2' fontSize={12}>
                    Sujata Naik, Homestyling
                </Typography>
                </div>
            </div>
        <div className='feedback h-75 w-100 p-4 text-center row'>
            <div className='testinomial w-50 p-5 h-auto col'>
                <Typography variant='h6' textAlign={"left"} fontSize={15.4}>I like all the chairs specially Gavin is lovely. Very happy with the services and coordination is super. Thank you so much for  prompt delivery 👌 Keep it up good work👍</Typography>
                <div className='d-flex w-100 h-50 justify-content-end align-items-center p-2'>
                <hr className='w-25 border border-dark'/>
                <Typography variant='h6' className='d-flex ms-2' fontSize={12}>
                    Sujata Naik, Homestyling
                </Typography>
                </div>
            </div>
            <div className='testinomial w-50 p-5 h-auto col'>
                <Typography variant='h6' textAlign={"left"} fontSize={15.4}>I like all the chairs specially Gavin is lovely. Very happy with the services and coordination is super. Thank you so much for  prompt delivery 👌 Keep it up good work👍</Typography>
                <div className='d-flex w-100 h-50 justify-content-end align-items-center p-2'>
                <hr className='w-25 border border-dark'/>
                <Typography variant='h6' className='d-flex ms-2' fontSize={12}>
                    Sujata Naik, Homestyling
                </Typography>
                </div>
            </div>
        </div>
        </div>
        <hr />
      </div>
    )
}

export default ClientTestinomial
