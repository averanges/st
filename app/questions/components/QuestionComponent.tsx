import React, { useState } from 'react'

const QuestionComponent = ({firstQuestion, data}) => {
  const [clicked, setClicked] = useState({QN: ''})
  const firstQuestionOptions = data.map((el,idx) => (
    <div key={idx} className={`flex gap-3 w-fit`}>
      <input type="radio" name="" id={(idx + 1).toString()} 
      onChange={(e) => setClicked({QN: e.target.id})}
      checked={clicked.QN === (idx + 1).toString() ? true : false}
     />
      <label htmlFor={(idx + 1).toString()}>{el}</label>
  </div>
  ))
  return (
      <div className='flex flex-col gap-5'>
        {firstQuestion && <h3>{firstQuestion}</h3>}
        {firstQuestionOptions}
      </div>

  )
}

export default QuestionComponent