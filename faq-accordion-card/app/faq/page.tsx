import Image from "next/image";
import { Kumbh_Sans } from 'next/font/google';
import FAQList from "../components/FAQList";

const kumbSansFont = Kumbh_Sans({
    subsets: ["latin"],
    weight: "700",
})

const page = () => {
    return (
        <div className='min-h-dvh bg-linear-to-t from-[#6463E7] to-[#B068E9] flex justify-center items-center'>
            <div className='lg:w-230 w-81.75 lg:h-127.25 h-133.75 rounded-[23px] bg-[#FFFFFF] drop-shadow-[0_50px_50px_#35127A7F] lg:flex lg:m-0 m-[150px_0px_70px_0px]'>

                <div className='lg:w-[50%] relative lg:overflow-hidden'>
                    <Image src="/line.svg" alt="line" width={500} height={400} className='hidden lg:block absolute z-2 left-[-70px]' />
                    <Image src="/line.svg" alt="line" width={500} height={400} className='hidden lg:block absolute z-2 -top-20 -left-17.5' />
                    <div className="absolute lg:w-120 lg:h-90 w-75 h-50 z-2 lg:top-16 lg:-left-21 -top-30 left-2.5">
                        <Image src="/illustration.svg" alt="illustration" fill className='object-contain' />
                    </div>
                    <Image src="/shadow.svg" alt="shadow" width={0} height={0} className='absolute w-116 h-142 z-1 top-10 -left-17 hidden lg:block' />
                    <Image src="/shadow-responsive.svg" alt="shadow-responsive" width={0} height={0} className='absolute w-66 h-67 z-1 -top-20 left-7 block lg:hidden' />
                </div>
                <div className="absolute lg:w-50 lg:h-46.5 w-30 h-25 z-3 lg:top-50 lg:-left-23.75 -top-11.25 left-4">
                    <Image src="/box.svg" alt="box" fill />
                </div>

                <div className='lg:w-[50%] flex flex-col lg:pl-5 lg:items-start items-center lg:mt-0 mt-16'>
                    <h1 className={`text-[32px] text-[#1E1F36] p-[65px_0px_25px_0px] ${kumbSansFont.className}`}>FAQ</h1>
                    <FAQList />
                </div>
            </div>
        </div>
    )
}

export default page