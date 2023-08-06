import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from '../components/EventPlanning/Hero'
import Features from '../components/EventPlanning/Features'
import Banner from '../components/EventPlanning/Banner'
import ContactUs from "../components/ContactUs"
import Head from 'next/head'

const EventPlanning = () => {
    return (
        <>
            <Head>
                <title>Event Planning | Velvet and Rose</title>
                <meta name="description" content="This is the Event Planning Page of Velvet and Rose" />
            </Head>
            <Navbar />
            <Hero />
            <Features />
            <Banner />
            <ContactUs />
            <Footer />
        </>
    )
}

export default EventPlanning
