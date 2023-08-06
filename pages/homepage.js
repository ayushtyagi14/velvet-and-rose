import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Homepage/Hero'
import AboutUs from '../components/Homepage/AboutUs'
import Events from '../components/Homepage/Events'
import Book from '../components/Book'
import Gallery from '../components/Gallery'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Head from 'next/head'

const Homepage = () => {
    const galleryData = [
        {
            id: "1",
            type: "image",
            url: "/image1.jpg",
            size: "large",
        },
        {
            id: "2",
            type: "image",
            url: "/image2.jpg",
            size: "small",
        },
        {
            id: "3",
            type: "video",
            url: "/video1.mp4",
            size: "large",
        },
        {
            id: "4",
            type: "image",
            url: "/image3.jpg",
            size: "small",
        },
    ];

    return (
        <>
            {/* <Navbar /> */}
            <Head>
                <title>Homepage | Velvet and Rose</title>
                <meta name="description" content="This is the Homepage of Velvet and Rose" />
            </Head>
            <Hero />
            <AboutUs />
            <Events />
            <Book title={"Book Your Event Today!"} homepage={true} />
            <Gallery galleryData={galleryData} title={"Take A Look At Our Previous Projects"} />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Homepage
