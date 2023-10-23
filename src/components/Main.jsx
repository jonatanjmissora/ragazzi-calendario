import { useState } from 'react'
import { Board } from './Main/Board'
import { Calculator } from './Main/Calculator'
import { Payments } from './Main/Payments'
import { History } from './Main/History'

const CALC_PAYMENTS = [
  { sector: 'ragazzi', rubro: 'agua', amount: 1200 },
  { sector: 'ragazzi', rubro: 'luz', amount: 3200 },
  { sector: 'palihue', rubro: 'telefono', amount: 200 }
]

const PAYMENTS = [
  { sector: 'ragazzi', rubro: 'agua', amount: 1200, expiration: '2023-10-10' },
  { sector: 'ragazzi', rubro: 'luz', amount: 3200, expiration: '2023-10-10' },
  {
    sector: 'palihue',
    rubro: 'telefono',
    amount: 200,
    expiration: '2023-10-10'
  }
]

export const Main = () => {
  const [payments, setPayments] = useState([])
  const [calcPayments, setCalcPayments] = useState([])

  return (
    <div className="main-container">
      <div className="left-container">
        <Board setPayments={setPayments} />
        <Calculator calcPayments={calcPayments} />
        <History />
      </div>
      <div className="right-container">
        <Payments payments={payments} calcPayments={calcPayments} setCalcPayments={setCalcPayments} />
      </div>
    </div>
  )
}
