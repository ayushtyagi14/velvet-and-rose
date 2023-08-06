import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from '../components/EventDesigning/Hero'
import Features from '../components/EventDesigning/Features'
import Banner from '../components/EventDesigning/Banner'
import Gallery from '../components/Gallery'
import ContactUs from "../components/ContactUs"
import Head from 'next/head'

const EventDesigning = () => {
    return (
        <>
            <Head>
                <title>Event Designing | Velvet and Rose</title>
                <meta name="description" content="This is the Event Designing Page of Velvet and Rose" />
            </Head>
            <Navbar />
            <Hero />
            <Features />
            <Banner />
            {/* <Gallery /> */}
            <ContactUs />
            <Footer />
        </>
    )
}

export default EventDesigning
