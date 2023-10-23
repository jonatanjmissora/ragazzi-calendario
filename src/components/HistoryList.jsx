import { useNavigate, useParams } from 'react-router-dom'
import { PAYMENTS_MOCK } from '../const/supabase'
import { useEffect, useState } from 'react'
import { MONTHS } from '../const/month'
import { Payments } from './Main/Payments'

export const HistoryList = () => {
  const [historyList, setHistoryList] = useState([])
  const { date } = useParams()
  const year = date.substring(0, 4)
  const month = date.substring(5)
  const navigate = useNavigate()

  useEffect(() => {
    const newHistoryList = PAYMENTS_MOCK[year][month]
    if (newHistoryList) setHistoryList(newHistoryList)
  }, [])

  return (
    <>
      <h3>
        <span onClick={() => navigate('/')}>{'<'}</span>
        {date}{' '}
        <span className="history-header-month">{MONTHS[+month - 1]}</span>
      </h3>
      {historyList.length > 0 && (
        <Payments
          payments={historyList}
          setCalcPayments={() => {

          }}
        />
      )}
    </>
  )
}
