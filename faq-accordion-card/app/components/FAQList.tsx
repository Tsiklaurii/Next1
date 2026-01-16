'use client'
import Question from './Question'
import { useState } from 'react';

const FAQList = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const questions = [
        {
            question: 'How many team members can I invite?',
            answer: 'You can invite up to 5 team members.'
        },
        {
            question: 'What is the maximum file upload size?',
            answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
        },
        {
            question: 'How do I reset my password?',
            answer: 'Click "forgot password" on the page and follow the instructions.'
        },
        {
            question: 'Can I cancel my subscription?',
            answer: 'Yes.'
        },
        {
            question: 'Do you provide additional support?',
            answer: 'Yes.'
        }
    ];

    return (
        <div>
            {questions.map((question, index) => (
                <Question
                    key={index}
                    question={question.question}
                    answer={question.answer}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    )
}

export default FAQList