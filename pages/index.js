import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Velvet and Rose</title>
        <meta name="description" content="Welcome to Velvet and Rose!" />
      </Head>
      <div className='h-screen overflow-hidden flex flex-col items-center justify-center'>
        <img src="/logo2.png" alt="Logo" className='md:h-[200px] mx-auto' />
        <button
          className='bg-[#7f0f1e] hover:bg-[#fff7f9] hover:border hover:border-[#7f0f1e] text-[20px] hover:text-[#7f0f1e] font-thin uppercase text-white md:w-[20%] w-[70%] mx-auto py-2 rounded-lg'
          onClick={() => router.push('/homepage')}
        >
          Enter
        </button>
      </div>
    </div>
  )
}
