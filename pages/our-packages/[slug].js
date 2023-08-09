import React from 'react';
import { useRouter } from 'next/router';
import { fadeIn, slideIn } from "../../utils/motion";
import { motion } from "framer-motion";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Pricing from '../../components/OurPackage/Pricing';
import Gallery from "../../components/Gallery"
import ContactUs from "../../components/ContactUs"
import Head from 'next/head';

const Packages = () => {
    const router = useRouter()
    const { slug } = router.query

    const allEvents = [
        {
            id: "1",
            title: "Wedding & Bridal",
            heading: "Forever Love: Wedding & Bridal Package",
            imgUrl: "/wedding-bridal.jpg",
            slug: "wedding-and-bridal",
            description: "Celebrate the timeless bond of love with our 'Eternal Love' Wedding & Bridal Package. We craft every detail with utmost care and elegance to make your special day a cherished memory that lasts a lifetime. From breathtaking floral arrangements to exquisite decor, our team of experts will create an enchanting ambiance that reflects your unique love story. Walk down the aisle with grace and radiance, surrounded by the beauty of our curated designs. Let us take care of every aspect, ensuring a seamless wedding experience, so you can focus on savoring the joy and magic of this once-in-a-lifetime occasion. Embrace the promise of forever with our bespoke 'Eternal Love' Wedding & Bridal Package.",
            price: "$1500",
            features: [
                "Basic Decoration",
                "Event Coordination",
                "Up to 50 guests",
                "1-hour Consultation",
                "Standard setup",
                "2 staff members",
            ],
            galleryData: [
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
            ]
        },
        {
            id: "2",
            title: "Sweet 16's & Quinceañera",
            heading: "Enchanted Celebration: Sweet 16's & Quinceañera Package",
            imgUrl: "/quinceanera.jpg",
            slug: "sweet-16-and-quinceañera",
            description: "Experience an enchanted celebration like no other with our Sweet 16's & Quinceañera Package. Let us make your special day unforgettable as we weave magic and elegance into every detail. Whether it's a Sweet 16 or a Quinceañera, our team will curate a bespoke event that perfectly captures your unique style and personality. From stunning décor to captivating entertainment, we will create a fairy-tale ambiance that will leave you and your guests in awe. Let your dreams come to life with our Enchanted Celebration package for Sweet 16's & Quinceañeras.",
            price: "$1800",
            features: [
                "Customized Themes",
                "Extravagant Decor",
                "Professional Entertainment",
                "Photography & Videography",
                "Gourmet Catering",
                "Personalized Invitations",
                "Quinceañera Ceremony",
            ],
            galleryData: [
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
            ]
        },
        {
            id: "3",
            title: "Bar/Bat Mitzvahs",
            heading: "Timeless Traditions: Bar/Bat Mitzvahs Package",
            imgUrl: "/bar-mitzvah.jpg",
            slug: "bar-bat-mitzvahs",
            description: "Embrace the richness of tradition and celebration with our Timeless Traditions Bar/Bat Mitzvahs Package. Our team is dedicated to crafting a memorable and meaningful event that honors this significant milestone in your life. From the traditional ceremony to the lively festivities, we ensure every aspect reflects the essence of this sacred occasion. With meticulous attention to detail, we create an atmosphere where family and friends come together to share in the joy of this special day. Let us infuse your Bar/Bat Mitzvah celebration with timeless elegance and heartfelt moments that will be treasured for generations to come.",
            price: "$1200",
            features: [
                "Traditional Ceremony",
                "Customized Themes",
                "Elegant Decor",
                "Professional Entertainment",
                "Catering & Kosher Options",
                "Special Rituals & Activities",
                "Photo & Video Services",
            ]
        },
        {
            id: "4",
            title: "Corporate and Political",
            heading: "Elevate Your Presence: Corporate and Political Package",
            imgUrl: "/corporate.jpg",
            slug: "corporate-and-political",
            description: "Elevate your presence and leave a lasting impact with our Corporate and Political Package. Whether it's a corporate event, a political campaign, or a high-profile gathering, our comprehensive package is tailored to meet your specific needs. From flawless event coordination to strategic planning, we ensure a seamless and professional execution of your vision. Our team is well-versed in creating the right ambiance that aligns with your brand or message, making every moment count. With attention to detail and a focus on excellence, we provide you with the tools to make a strong and meaningful statement in the corporate or political arena. Trust us to handle every aspect of your event, allowing you to concentrate on what matters most - achieving your goals and making a powerful impact.",
            price: "$2000",
            features: [
                "Strategic Planning",
                "Branding & Messaging",
                "Professional Event",
                "Media & Press Management",
                "High-Profile Venue Selection",
                "VIP Services",
                "State-of-the-Art Technology",
            ],
            galleryData: [
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
            ]
        },
        {
            id: "5",
            title: "Intimate and Soiree",
            heading: "Intimate Elegance: The Soiree Experience",
            imgUrl: "/soiree.jpg",
            slug: "intimate-and-soiree",
            description: "Step into a world of intimate elegance with our exclusive Soiree Package. Designed for those seeking a refined and sophisticated affair, our team curates every detail to perfection. Whether it's an intimate celebration with close friends or a cozy gathering with loved ones, we create a magical atmosphere that exudes charm and warmth. From exquisite floral arrangements to enchanting decor, our Soiree Package brings your vision to life, leaving a lasting impression on all who attend. With personalized themes and attention to the finest elements, we ensure that your event reflects your unique style and personality. Allow us to transform your intimate gathering into a dreamy soiree that captures the hearts of your guests and creates cherished memories to last a lifetime. Let us guide you through a delightful journey of intimate elegance and create an unforgettable experience for you and your guests.",
            price: "$2200",
            features: [
                "Personalized Themes",
                "Exquisite Floral Arrangements",
                "Captivating Decor",
                "Intimate Guest List",
                "Charming Entertainment",
                "Cozy Seating Arrangements",
                "Signature Cocktails & Cuisine",
            ],
            galleryData: [
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
            ]
        },
        {
            id: "6",
            title: "Some Event",
            heading: "Some Event",
            imgUrl: "/event1.jpg",
            slug: "some-event",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id provident obcaecati eius? Ullam quis quia rerum ad neque magni saepe modi molestiae. Numquam, accusamus. Necessitatibus vero sunt, incidunt impedit, eum aperiam quia non vel molestias tempore architecto ut accusantium nam cupiditate eligendi voluptas delectus excepturi nihil veniam. Laudantium, soluta ratione. Sed dolorem dolorum magnam corrupti alias laboriosam temporibus eaque. Voluptatum eos harum repellat enim illum rerum cumque, nulla ab odio quae vel temporibus cupiditate doloribus qui repellendus sapiente sed ducimus fugiat eaque cum minima adipisci accusamus. Adipisci, quas obcaecati commodi blanditiis perspiciatis, maxime voluptas omnis unde ex culpa ipsam reprehenderit!",
            price: "$1000",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
                "Feature 5",
                "Feature 6",
            ],
            galleryData: [
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
            ]
        },
        {
            id: "7",
            title: "Some Event",
            heading: "Some Event",
            imgUrl: "/event2.jpg",
            slug: "some-event",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id provident obcaecati eius? Ullam quis quia rerum ad neque magni saepe modi molestiae. Numquam, accusamus. Necessitatibus vero sunt, incidunt impedit, eum aperiam quia non vel molestias tempore architecto ut accusantium nam cupiditate eligendi voluptas delectus excepturi nihil veniam. Laudantium, soluta ratione. Sed dolorem dolorum magnam corrupti alias laboriosam temporibus eaque. Voluptatum eos harum repellat enim illum rerum cumque, nulla ab odio quae vel temporibus cupiditate doloribus qui repellendus sapiente sed ducimus fugiat eaque cum minima adipisci accusamus. Adipisci, quas obcaecati commodi blanditiis perspiciatis, maxime voluptas omnis unde ex culpa ipsam reprehenderit!",
            price: "$1000",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
                "Feature 5",
                "Feature 6",
            ],
            galleryData: [
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
            ]
        },
        {
            id: "8",
            title: "Some Event",
            heading: "Some Event",
            imgUrl: "/event3.jpg",
            slug: "some-event",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id provident obcaecati eius? Ullam quis quia rerum ad neque magni saepe modi molestiae. Numquam, accusamus. Necessitatibus vero sunt, incidunt impedit, eum aperiam quia non vel molestias tempore architecto ut accusantium nam cupiditate eligendi voluptas delectus excepturi nihil veniam. Laudantium, soluta ratione. Sed dolorem dolorum magnam corrupti alias laboriosam temporibus eaque. Voluptatum eos harum repellat enim illum rerum cumque, nulla ab odio quae vel temporibus cupiditate doloribus qui repellendus sapiente sed ducimus fugiat eaque cum minima adipisci accusamus. Adipisci, quas obcaecati commodi blanditiis perspiciatis, maxime voluptas omnis unde ex culpa ipsam reprehenderit!",
            price: "$1300",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
                "Feature 5",
                "Feature 6",
            ],
            galleryData: [
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
            ]
        },
        {
            id: "8",
            title: "Some Event",
            heading: "Some Event",
            imgUrl: "/floral.jpg",
            slug: "some-event",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id provident obcaecati eius? Ullam quis quia rerum ad neque magni saepe modi molestiae. Numquam, accusamus. Necessitatibus vero sunt, incidunt impedit, eum aperiam quia non vel molestias tempore architecto ut accusantium nam cupiditate eligendi voluptas delectus excepturi nihil veniam. Laudantium, soluta ratione. Sed dolorem dolorum magnam corrupti alias laboriosam temporibus eaque. Voluptatum eos harum repellat enim illum rerum cumque, nulla ab odio quae vel temporibus cupiditate doloribus qui repellendus sapiente sed ducimus fugiat eaque cum minima adipisci accusamus. Adipisci, quas obcaecati commodi blanditiis perspiciatis, maxime voluptas omnis unde ex culpa ipsam reprehenderit!",
            price: "$1100",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
                "Feature 5",
                "Feature 6",
            ],
            galleryData: [
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
            ]
        },
    ];

    const selectedEvent = allEvents.find((event) => event.slug === slug);

    if (!selectedEvent) {
        return <div>No event found with this name.</div>;
    }

    return (
        <div className='overflow-hidden'>
            <Head>
                <title>{selectedEvent.title} | Velvet and Rose</title>
                <meta name="description" content={`This is the ${selectedEvent.title} Page of Velvet and Rose`} />
            </Head>
            <Navbar />
            <h1 className="text-center font-vibes lg:text-[50px] md:text-[44px] text-[30px] mt-5">
                {selectedEvent.heading}
            </h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center w-[90%] mx-auto mt-10 mb-20">
                <motion.div
                    className="rounded-xl md:w-[500px] mx-auto lg:mx-0"
                    variants={fadeIn("up", "tween", 0.8, 0.5)}
                    initial="hidden"
                    whileInView="show"
                >
                    <img
                        src={selectedEvent.imgUrl}
                        alt={selectedEvent.title}
                    />
                </motion.div>
                <motion.div
                    className="text-[18px] font-inter mt-5 lg:mt-0"
                    variants={fadeIn("left", "tween", 0.5, 1)}
                    initial="hidden"
                    whileInView="show"
                >
                    {selectedEvent.description}
                </motion.div>
            </div>
            <Pricing
                price={selectedEvent.price}
                features={selectedEvent.features}
                title={selectedEvent.title}
            />
            <Gallery galleryData={selectedEvent.galleryData} title={"Gallery"} />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Packages;
