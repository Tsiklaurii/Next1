import Question from '../components/Question'
import Image from "next/image";
import { Kumbh_Sans } from 'next/font/google';

const kumbSansFont = Kumbh_Sans({
    subsets: ["latin"],
    weight: "700",
})

const page = () => {
    return (
        <div className='h-screen bg-linear-to-t from-[#6463E7] to-[#B068E9] flex justify-center items-center'>
            <div className='w-230 h-127.25 rounded-[23px] bg-[#FFFFFF] drop-shadow-[0_50px_50px_#35127A7F] flex'>
                <div className='w-[50%] relative overflow-hidden'>
                    <Image src="/line.svg" alt="file" width={500} height={400} className='absolute z-2 left-[-40px]' />
                    <Image src="/line.svg" alt="file" width={500} height={400} className='absolute z-2 -top-20 -left-10' />
                    <Image src="/illustration.svg" alt="file" width={472} height={359} className='absolute z-2 top-17.5 -left-10' />
                    <Image src="/shadow.svg" alt="file" width={964} height={568} className='absolute z-1 top-20.5 -left-10' />
                </div>
                <Image src="/box.svg" alt="file" width={200} height={106} className='absolute z-3 top-55 -left-24.25' />

                <div className='border border-amber-50 w-[50%]'>
                    <h1 className={`text-[32px] text-[#1E1F36] p-[65px_0px_25px_0px] ${kumbSansFont.className}`}>FAQ</h1>
                    <Question
                        question='How many team members can I invite?'
                        answer='You can invite up to 5 team members.' />
                    <Question
                        question='What is the maximum file upload size?'
                        answer='No more than 2GB. All files in your account must fit your allotted storage space.' />
                    <Question
                        question='How do I reset my password?'
                        answer='Click "forgot password" on the page and follow the instructions.' />
                    <Question
                        question='Can I cancel my subscription?'
                        answer='Yes.' />
                    <Question
                        question='Do you provide additional support?'
                        answer='Yes.' />
                </div>
            </div>
        </div>
    )
}

export default page