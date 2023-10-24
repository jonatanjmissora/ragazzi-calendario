import { useNavigate, useParams } from 'react-router-dom'
import { PAYMENTS_MOCK } from '../const/supabase'
import { useState } from 'react'
import { MONTHS } from '../const/month'
import { Payments } from '../components/Main/Payments'

export const HistoryList = () => {
  const { date } = useParams()
  const year = date.substring(0, 4)
  const month = date.substring(5)
  const [historyList] = useState(PAYMENTS_MOCK[year][month] || [])
  const navigate = useNavigate()

  return (
    <>
      <h3>
        <span onClick={() => navigate('/')}>{'<'}</span>
        {date}{' '}
        <span className="history-header-month">{MONTHS[+month - 1]}</span>
      </h3>
      <Payments payments={historyList} calcPayments={[]} setCalcPayments={() => {}} />
    </>
  )
}
