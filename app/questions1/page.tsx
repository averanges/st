'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import QuestionComponent from '../questions/components/QuestionComponent';

const Questions1 = () => {
  const [questionsAnswers, setQuestionsAnswers] = useState()
  const mainQuestion = '[1～2] (   )에 들어갈 말로 가장 알맞은 것을 고르십시오. (각 2점)'
  const text = '1. 책을 많이 (       ) 지식을 쌓을 수 있다.'
  const separateText = text.split(' ').map((el, idx) => (
    <span key={idx}>
      <span className='hover:bg-amber-300 cursor-pointer'>{el}</span>
      <span> </span>
    </span>
  ))
 const data = ['읽으면', '읽든지', '읽지만', '읽거나']
  return (
    <div className='min-h-screen flex flex-col items-center mb-10 mt-20'>
      <div className='w-[60%] flex flex-col gap-8 mt-3'>
        <h2>{mainQuestion}</h2>
            <div className='border-black border-[1px] p-3'>
            <p>
                {separateText}
            </p>
            </div>
            <QuestionComponent firstQuestion={null} data={data}/>
            <div className='flex justify-end w-full'>
                <Link href='/questions'
                className="bg-amber-300 rounded-full py-3 px-10 shadow-md shadow-amber-500 text-white font-semibold hover:shadow-xl duration-500">Next Question
                </Link>
            </div>
        </div>
    </div>
     )
    }

    export default Questions1