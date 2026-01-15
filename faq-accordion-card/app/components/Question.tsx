'use client'
import Image from "next/image";
import { Kumbh_Sans } from 'next/font/google';
import { useState } from "react";

const kumbSansFont = Kumbh_Sans({
    subsets: ["latin"],
})

type QuestionTypes = {
    question: string,
    answer: string
}

const Question = ({ question, answer }: QuestionTypes) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-b-[#E8E8EA] p-[18px_0px_18px_0px] w-87.5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex place-content-between pr-4">
                <h1 className={`text-[14px] ${kumbSansFont.className} ${isOpen ? 'font-bold' : 'text-[#4B4C5F]'} transition-all duration-300`}>{question}</h1>
                <Image src="/arrow.svg" alt="file" width={8} height={4} className={`cursor-pointer ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-25 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className='text-[12px] text-[#787887] leading-4.5 mt-2.75 w-79.75'>{answer}</p>
            </div>
        </div>
    )
}

export default Question