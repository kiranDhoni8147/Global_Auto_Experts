import React from 'react'
import Navbar from './CarSpa/Navbar'
import HeroSection from './CarSpa/HeroSection'
import ServicesSection from './CarSpa/ServicesSection'
import TestimonialsSection from './CarSpa/TestimonialsSection'
import Footer from './Footer'

const CarSpa = () => {
  return (
     <div className='car-spa'>
        <Navbar/>
        <HeroSection/>
        <ServicesSection/>
        <TestimonialsSection/>
        <Footer/>
    </div>
  )
}

export default CarSpa
