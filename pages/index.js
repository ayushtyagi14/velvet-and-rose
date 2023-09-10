import Head from 'next/head'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import Footer from '../components/Footer'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Velvet and Rose</title>
        <meta name="description" content="Welcome to Velvet and Rose!" />
      </Head>
      <div className='flex flex-col items-center mb-20'>
        <img src="/logo2.png" alt="Velvet and Rose Logo" className='h-[120px] mx-auto' />
        <h1 className='text-center md:text-[130px] text-[60px]'>Coming Soon</h1>
        <p className='text-center md:text-[50px] text-[30px] font-Abramo leading-none'>
          We are still working on something amazing. <br /> Stay tuned for the Magic!
        </p>
        <div className='mt-10 flex flex-row gap-10'>
          <Button
            title={"/instagram-logo.png"}
            image={true}
            url={"https://www.instagram.com/velvetandrose_events/"}
          />
          <Button
            title={"/call-icon.png"}
            image={true}
            url={"tel:+15169048852"}
          />
          <Button
            title={"/mail-icon.png"}
            image={true}
            url={"mailto:info@velvetandrose.events"}
          />
          <Button
            title={"/location-icon.png"}
            image={true}
            url={"https://goo.gl/maps/tCWTS6TvVc7Q7HQd7"}
          />
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 items-start w-[90%] mx-auto gap-10 mt-10'>
          <div className='flex flex-col items-center text-center shadow-lg p-5 rounded-xl'>
            <h1 className='text-[60px] font-Abramo'>Who We Are</h1>
            <p className='font-quicksand'>Velvet and Rose offers contemporary artistry and professional experience in a personalized and detailed approach. Our team of experts guide you through every step of the process as we aim to create celebrations that encapsulate the aesthetic, personality and charm of our clients and their guests. Our services cater to a vast range of floral and event needs from Weddings and Receptions, to Soirees, Sweet 16&apos;s, Bar/Bat Mitsvahs, Corporate Events and many more.
            </p>
          </div>
          <div className='flex flex-col items-center text-center shadow-lg p-5 rounded-xl'>
            <h1 className='text-[60px] font-Abramo'>Our Mission</h1>
            <p className='font-quicksand'>
              Velvet and Rose strives to provide all our clients with high-end design and event services while balancing their visual requirements and budgeting needs; to create a collaboration with our clients that results in an authentic expression of joy and beauty.
            </p>
          </div>
        </div>
      </div>
      <div className='mb-40 h-[2200px]'>
        <h1 className='text-center md:text-[80px] text-[30px]'>Book Your Consultation Today!</h1>
        <iframe
          src="/calendly.html"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
      <Footer />
    </div>
  )
}
