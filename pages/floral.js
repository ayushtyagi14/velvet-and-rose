import React from 'react'
import Hero from '../components/Floral/Hero'
import Intro from '../components/Floral/Intro'
import Pricing from "../components/Floral/Pricing"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import Head from 'next/head'

const Floral = () => {
    return (
        <>
            <Head>
                <title>Floral | Velvet and Rose</title>
                <meta name="description" content="This is the Floral Page of Velvet and Rose" />
            </Head>
            <Hero />
            <Intro />
            <Pricing />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Floral
