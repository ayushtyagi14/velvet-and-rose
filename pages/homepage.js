import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Homepage/Hero'
import AboutUs from '../components/Homepage/AboutUs'
import Events from '../components/Homepage/Events'
import Book from '../components/Homepage/Book'
import Gallery from '../components/Homepage/Gallery'
import ContactUs from '../components/Homepage/ContactUs'
import Footer from '../components/Footer'

const Homepage = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <AboutUs />
            <Events />
            <Book />
            <Gallery />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Homepage
