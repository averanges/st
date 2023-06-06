'use client';

import React, { useState } from 'react'

const Questions = () => {
  const [clicked, setClicked] = useState(false)
  const mainQuestion = '[48~50]다음을 읽고 물음에 답하십시오.'
  const text = '인터넷 공간에서의 개인 정보 삭제에 관한 법안 제정이 뜨거운 쟁점으로 부각되고 있다. 유럽에서는 이러한 법안이 통과되었고 미국에서도 제한적 으로 적용하기로 결정되었다. 우리 사회에서도 그간 피해 사례가 잘 알려져있기 때문인지 찬성 쪽으로 공감대가 형성되어 있는 듯하다. 그러나 이는 이면에 잠재한 부정적 측면을 고려하지 않은 성급한 동조이다. 이 법안이 실행되었을 때 나타날 수 있는 부작용을 생각해 보라. 삭제된 정보가 흉악 범에 관한 것이라면,특정 기업의 부조리나 공직자의 비리를 고발한 기사 라면…….법 시행의 결과가 개인뿐만 아니라 사회,국가의 불행으로 이어 지지 않는다고 누가 자신할 수 있겠는가?예컨대 누군가가 후속 범죄의 대상이 될 수도 있고 과거의 행적을 조작한 후보자가 선거에서 당선될 수도 있다. 개인의 권리를 존중하려는 의도가 (     )장치가 되어 서는 안 될 것이다.'
  const separateText = text.split(' ').map((el, idx) => (
    <>
      <span key={idx} className='hover:bg-amber-300 cursor-pointer'>{el}</span>
      <span> </span>
    </>
  ))
  const firstQuestionOptions = ['법 제정의 공론화를 촉구하기 위해','법 제정의 반대 근거를 제시하기 위해','법 시행의 피해 사례를 알려 주기 위해','법 시행의 적절한 시기를 제안하기 위해'].map((el,idx) => (
    <div key={idx} className='flex gap-3'>
      <input type="radio" name="" id={el} onClick={() => setClicked(true)} checked={clicked}/>
      <label htmlFor={el}>{el}</label>
  </div>
  ))
  const firstQuestion = 'Q48. 필자가 이 글을 쓴 목적을 고르십시오.'
  const secondQuestion = 'Q49. (     )에 들어갈 내용으로 알맞은 것을 고르십시오.'
  const thirdQuestion = 'Q50. 밑줄 친 부분에 나타난 필자의 태도로 알맞은 것을 고르십시오.'
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='w-[60%] flex flex-col gap-8 mt-3'>
        <h2>{mainQuestion}</h2>
        <div className='border-black border-[1px] p-3'>
          <p>
            {separateText}
          </p>
        </div>
        <div className='flex flex-col gap-5'>
          <h3>{firstQuestion}</h3>
          {firstQuestionOptions}
        </div>
        <div className='flex flex-col gap-5'>
          <h3>{secondQuestion}</h3>
          <div className='flex gap-3'>
            <input type="radio" name="" id="first" />
            <label htmlFor="first">공공의 피해를 유발하는</label>
          </div>
          <div className='flex gap-3'>
            <input type="radio" name="" id="first" />
            <label htmlFor="first">국민의 자유를 침해하는</label>
          </div>
          <div className='flex gap-3'>
            <input type="radio" name="" id="first" />
            <label htmlFor="first">소통의 단절을 조장하는</label>
          </div>
          <div className='flex gap-3'>
            <input type="radio" name="" id="first" />
            <label htmlFor="first">사회의 통합을 저해하는</label>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h3>{thirdQuestion}</h3>
          <div className='flex gap-3'>
            <input type="radio" name="" id="first" />
            <label htmlFor="first">이 법으로 피해를 입은 사람들을 동정하고 있다</label>
          </div>
          <div className='flex gap-3'>
            <input type="radio" name="" id="first" />
            <label htmlFor="first">이 법의 제정 단계에서의 문제점을 지적하고 있다</label>
          </div>
          <div className='flex gap-3'>
            <input type="radio" name="" id="first" />
            <label htmlFor="first">이 법이 실패했던 해외 사례에 대해 비판하고 있다</label>
          </div>
          <div className='flex gap-3'>
            <input type="radio" name="" id="first" />
            <label htmlFor="first">이 법의 시행이 가져올 부작용에 대해 염려하고 있다</label>
          </div>
        </div>
        <div className='flex justify-end w-full'>
          <button className="bg-teal-300 rounded-full py-3 px-10 shadow-md shadow-teal-500 text-white font-semibold hover:shadow-xl duration-500">Next Question</button>
        </div>
      </div>
    </div>
  )
}

export default Questions