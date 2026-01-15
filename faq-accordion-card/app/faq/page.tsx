import Question from '../components/Question'
import Image from "next/image";

const page = () => {
    return (
        <div className='h-screen bg-linear-to-t from-[#6463E7] to-[#B068E9] flex justify-center items-center'>
            <div className='w-230 h-127.25 rounded-[23px] bg-[#FFFFFF] drop-shadow-[0_50px_50px_#35127A7F] flex'>
                <div className='w-[50%] relative overflow-hidden'>
                    <Image src="/faq-image.svg" alt="file" width={472} height={359} className='absolute z-2 top-[70px] left-[-40px]' />
                    <Image src="/faq-shadow.svg" alt="file" width={964} height={568} className='absolute z-1 top-20.5 -left-10' />
                </div>
                <Image src="/faq-box.svg" alt="file" width={200} height={106} className='absolute z-3 top-55 -left-24.25' />

                <div className='border border-amber-50 w-[50%]'>
                    <Question />
                </div>
            </div>
        </div>
    )
}

export default page