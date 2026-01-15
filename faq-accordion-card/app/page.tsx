import Link from 'next/link'

const page = () => {
  return (
    <main className='h-screen bg-linear-to-t from-[#6463E7] to-[#B068E9]'>
      <h1>Frequently Asked Question</h1>
      <Link href="/faq" className='cursor-pointer font-black z-10'>FAQ</Link>
    </main>
  )
}

export default page