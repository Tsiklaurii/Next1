'use client'
import Image from "next/image";
import { Kumbh_Sans } from 'next/font/google';

const kumbSansFont = Kumbh_Sans({
    subsets: ["latin"],
})

type QuestionTypes = {
    question: string,
    answer: string,
    isOpen: boolean,
    onToggle: () => void
}

const Question = ({ question, answer, isOpen, onToggle }: QuestionTypes) => {
    return (
        <div className="border-b border-b-[#E8E8EA] p-[18px_0px_18px_0px] lg:w-87.5 w-69.75 cursor-pointer" onClick={onToggle}>
            <div className="flex place-content-between lg:pr-4">
                <h1 className={`lg:text-[14px] text-[13px] ${kumbSansFont.className} ${isOpen ? 'font-bold text-[#1E1F36]' : 'text-[#4B4C5F] hover:text-[#F47B56]'} transition-all duration-300`}>{question}</h1>
                <Image src="/arrow.svg" alt="file" width={8} height={4} className={`cursor-pointer ${isOpen ? 'rotate-180' : ''} h-auto w-auto`} />
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-25 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className='text-[12px] text-[#787887] leading-4.5 mt-2.75 lg:w-79.75 w-57.5'>{answer}</p>
            </div>
        </div>
    )
}

export default Question