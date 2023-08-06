import React from "react";
import Main from "../components/AboutUs/Main";
import Hero from "../components/AboutUs/Hero";
import TeamMemberCard from "../components/AboutUs/TeamMemberCard";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Head from "next/head";

const AboutUs = () => {

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

    const teamMembers = [
        {
            name: "John Doe",
            role: "Founder",
            photoUrl: "/man.jpg",
            description: "John Doe is the founder and visionary behind Velvet & Rose. With a passion for event management and creativity, he leads the team to create extraordinary experiences for clients.",
        },
        {
            name: "Jane Smith",
            role: "Event Planner",
            photoUrl: "/woman.jpg",
            description: "Jane Smith is an experienced event planner with a keen eye for details. She works closely with clients to understand their vision and brings it to life with precision and elegance.",
        },
        {
            name: "Michael Johnson",
            role: "Creative Director",
            photoUrl: "/man2.jpg",
            description: "Michael Johnson is the creative genius behind Velvet & Rose's unique and innovative event designs. He combines artistry with functionality to create memorable experiences.",
        },
    ];

    return (
        <>
            <Head>
                <title>About Us | Velvet and Rose</title>
                <meta name="description" content="This is the About Us Page of Velvet and Rose" />
            </Head>
            <Hero />
            <Main />
            <div className="my-20 mb-32">
                <div className="lg:w-[90%] w-[95%] mx-auto">
                    <motion.h2
                        className="lg:text-[60px] md:text-[50px] text-[36px] font-vibes text-center mb-10"
                        variants={slideIn("up", "spring", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                    >
                        Meet Our Team
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                photoUrl={member.photoUrl}
                                description={member.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Gallery galleryData={galleryData} title={"Some Of Our Previous Work"} />
            <ContactUs />
            <Footer />
        </>
    );
};

export default AboutUs;
