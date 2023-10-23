import React, { useState } from 'react'
import { SECTORS } from '../../const/sectors'
import { BoardRow } from './BoardRow'
import { RUBROS } from '../../const/rubros'

export const Board = ({ setPayments }) => {
  const [paymentOptions, setPaymentOptions] = useState(RUBROS)

  return (
    <div className="main-board">
      {SECTORS.map((sector, index) => (
        <BoardRow
          key={index}
          sector={sector}
          setPayments={setPayments}
          paymentOptions={paymentOptions}
          setPaymentOptions={setPaymentOptions}
        />
      ))}
    </div>
  )
}
