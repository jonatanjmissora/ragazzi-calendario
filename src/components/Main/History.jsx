import React, { useState } from 'react'
import { getActualDate } from '../../services/getDate'
import { MONTHS } from '../../const/month'
import { under10Format } from '../../services/under10Format'
import { useNavigate } from 'react-router-dom'

export const History = () => {
  const [date, setDate] = useState({
    year: getActualDate().year,
    month: getActualDate().month,
    day: getActualDate().day
  })

  return (
    <div className="history-container">
      <Year date={date} updateDate={setDate} />
      <Months date={date} updateDate={setDate} />
    </div>
  )
}

const Year = ({ date, updateDate }) => {
  const actualYear = date.year

  const handleClick = (direction) => {
    let newYear = +date.year
    if (direction === 'left') {
      newYear -= 1
    } else {
      newYear += 1
    }
    const year = newYear.toString()
    const newDate = { ...date, year }
    updateDate(newDate)
  }

  return (
    <div className="year-container">
      <span className="chevron" onClick={() => handleClick('left')}>
        {'<'}
      </span>
      <span>{actualYear}</span>
      <span className="chevron" onClick={() => handleClick('right')}>
        {'>'}
      </span>
    </div>
  )
}

const Months = ({ date, updateDate }) => {
  const navigate = useNavigate()
  const actualMonth = +date.month - 1
  const monthBtnClass = (index) =>
    actualMonth === index ? 'month-btn active' : 'month-btn'

  const handleClick = (index) => {
    const year = date.year
    const month = under10Format(index.toString())
    const day = date.day
    const newDate = { year, month, day }
    updateDate(newDate)
    const newDateStr = `${year}-${month}`
    navigate('/' + newDateStr)
  }

  return (
    <ul>
      {MONTHS.map((month, index) => (
        <button
          to={''}
          onClick={() => handleClick(index + 1)}
          className={monthBtnClass(index)}
          key={month}
        >
          {month}
        </button>
      ))}
    </ul>
  )
}
