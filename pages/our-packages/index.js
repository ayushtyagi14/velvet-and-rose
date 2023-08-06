import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Book from '../../components/Book'
import Head from 'next/head'

const Index = () => {
    return (
        <>
            <Head >
                <title>Our Packages | Velvet and Rose</title>
                <meta name="description" content="This is Our Packages of Velvet and Rose" />
            </Head>
            <Navbar />
            <Book title={"Our Packages"} />
            <Footer />
        </>
    )
}

export default Index
