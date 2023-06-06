import React, { useState } from 'react'

const QuestionOptions = () => {
  const [clicked, setClicked] = useState('')

  const firstQuestionOptions = ['법 제정의 공론화를 촉구하기 위해','법 제정의 반대 근거를 제시하기 위해','법 시행의 피해 사례를 알려 주기 위해','법 시행의 적절한 시기를 제안하기 위해'].map((el,idx) => (
    <div key={idx} className={`flex gap-3 w-fit`}>
      <input type="radio" name="" id={(idx + 1).toString()} 
      onChange={(e) => setClicked(e.target.id)}
      checked={clicked === (idx + 1).toString() ? true : false}
     />
      <label htmlFor={(idx + 1).toString()}>{el}</label>
  </div>
  ))

  return (
    <>{firstQuestionOptions}</>
  )
}

export default QuestionOptions