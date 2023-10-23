import React from 'react'

export const Calculator = ({ calcPayments }) => {
  const totalPayments = calcPayments.reduce(
    (total, payment) => total + payment.amount,
    0
  )

  if (calcPayments.length) {
    return (
      <div className="main-calculator">
        {calcPayments.map((cp) => (
          <CalcRow key={cp.sector + cp.rubro} payment={cp} />
        ))}
        <div className="calc-row total">
          <span>Total</span>
          <span>$ {totalPayments}</span>
        </div>
      </div>
    )
  }
}

const CalcRow = ({ payment }) => {
  const { sector, rubro, amount } = payment
  return (
    <div className="calc-row" data-sector={sector}>
      <span>{sector}</span>
      <span>{rubro}</span>
      <span>{amount}</span>
    </div>
  )
}
