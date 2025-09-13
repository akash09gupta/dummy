import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

export default function ContactUs() {
  return (
    <>
    <Link to="/" className="btn btn-dark m-5">Go Back to Home</Link>
    <Contact/>
    </>
  )
}
