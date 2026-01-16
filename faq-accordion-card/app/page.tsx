import Link from 'next/link'

const page = () => {
  return (
    <main className='h-screen bg-linear-to-t from-[#6463E7] to-[#B068E9] flex items-center justify-center'>
      <div className='rounded-2xl w-110 flex flex-col items-center gap-10 p-10 bg-white'>
        <h1 className='font-bold text-[25px]'>Frequently Asked Questions</h1>
        <Link href="/faq" className='cursor-pointer p-[10px_30px] bg-green-700 hover:bg-green-600 transition-all duration-300 text-[#ffffff] font-bold z-1 rounded-xl'>FAQ</Link>
      </div>
    </main>
  )
}

export default page