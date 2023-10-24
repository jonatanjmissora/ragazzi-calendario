import React, { useState } from 'react'
import { SECTORS } from '../../const/sectors'

export const Payments = ({ payments, calcPayments, setCalcPayments }) => {
  const [paymentFilter, setPaymentFilter] = useState('all')

  const filteredPayments = payments.filter((payment) => {
    if (paymentFilter === 'all') return true
    else return paymentFilter === payment.sector
  })

  const sortedFilteredPayments = filteredPayments.sort((a, b) =>
    a.expiration.localeCompare(b.expiration)
  )

  const isHistoryLayout = payments[0]?.fechaPago !== undefined

  return (
    <div className="main-payments">
      <PaymentsFilter
        paymentFilter={paymentFilter}
        setPaymentFilter={setPaymentFilter}
      />
      <PaymentsHeader isHistoryLayout={isHistoryLayout}/>
      <PaymentsList
        sortedFilteredPayments={sortedFilteredPayments}
        calcPayments={calcPayments}
        setCalcPayments={setCalcPayments}
        isHistoryLayout={isHistoryLayout}
      />
    </div>
  )
}

const PaymentsFilter = ({ paymentFilter, setPaymentFilter }) => {
  const handleChange = (event) => {
    setPaymentFilter(event.target.value)
  }

  const labelClass = (filter) =>
    paymentFilter === filter
      ? 'payment-filter-label active'
      : 'payment-filter-label'

  return (
    <div className="payment-filters">
      <div className="payment-filter">
        <input
          className="payment-filter-check"
          type="radio"
          name="filter"
          id={'all-check'}
          value="all"
          onChange={handleChange}
          defaultChecked
        />
        <label className={labelClass('all')} htmlFor={'all-check'}>
          todos
        </label>
      </div>
      {SECTORS.map((sector) => (
        <div className="payment-filter" key={sector}>
          <input
            className="payment-filter-check"
            type="radio"
            name="filter"
            id={`${sector}-check`}
            value={sector}
            onChange={handleChange}
          />
          <label className={labelClass(sector)} htmlFor={`${sector}-check`}>
            {sector}
          </label>
        </div>
      ))}
    </div>
  )
}

const PaymentsHeader = ({ isHistoryLayout }) => {
  return (
    <div className="payments-header">
      <span></span>
      <span>vencimiento</span>
      <span>sector</span>
      <span>rubro</span>
      <span>monto</span>
      <span>{isHistoryLayout ? 'fecha pago' : ''}</span>
    </div>
  )
}

const PaymentsList = ({ sortedFilteredPayments, calcPayments, setCalcPayments, isHistoryLayout }) => {
  return (
    <>
      {sortedFilteredPayments.map((payment) => (
        <PaymentRow
          key={payment.id}
          payment={payment}
          calcPayments={calcPayments}
          setCalcPayments={setCalcPayments}
          isHistoryLayout={isHistoryLayout}
        />
      ))}
    </>
  )
}

const PaymentRow = ({ payment, calcPayments, setCalcPayments, isHistoryLayout }) => {
  const { sector, rubro, amount, expiration } = payment

  const handleChange = (event) => {
    const checked = event.target.checked
    if (checked) setCalcPayments((prev) => [...prev, payment])
    else {
      setCalcPayments((prev) =>
        prev.filter((actualPayment) => actualPayment.id !== payment.id)
      )
    }
  }

  const isPaymentInCalc = () => {
    return calcPayments.some(calcPayment => calcPayment.id === payment.id)
  }

  return (
    <div className="payment-row" data-sector={sector}>
      {!isHistoryLayout ? <input type="checkbox" onChange={handleChange} defaultChecked={isPaymentInCalc()}/> : <div></div>}
      <span>{expiration}</span>
      <span>{sector}</span>
      <span>{rubro}</span>
      <span>{amount}</span>
      {!isHistoryLayout ? <span>icons</span> : <div></div>}
    </div>
  )
}
