import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContactUs from "../components/ContactUs"
import GetInTouch from '../components/ContactUsPage/GetInTouch'
import Head from 'next/head'

const ContactUsPage = () => {
    return (
        <>
            <Head>
                <title>Contact Us | Velvet and Rose</title>
                <meta name="description" content="This is the Contact Us Page of Velvet and Rose" />
            </Head>
            <Navbar />
            <GetInTouch />
            <ContactUs />
            <Footer />
        </>
    )
}

export default ContactUsPage
