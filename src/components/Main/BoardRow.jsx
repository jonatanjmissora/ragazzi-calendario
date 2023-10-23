import React from 'react'
import { getActualDate } from '../../services/getDate'
import play from '../../assets/play.svg'

export const BoardRow = ({
  sector,
  setPayments,
  paymentOptions,
  setPaymentOptions
}) => {
  const handleAddPayment = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    let [rubro, amount, expiration] = formData.values()
    const { year, month, day } = getActualDate()
    if (!expiration) expiration = `${year}-${month}-${day}`
    const newPayment = {
      id: `${expiration}_${sector}_${rubro}`,
      sector,
      rubro,
      amount: parseInt(amount, 10),
      expiration
    }
    setPayments((prev) => [...prev, newPayment])
    const newPaymentOptions = {
      ...paymentOptions,
      [sector]: paymentOptions[sector].filter((payment) => payment !== rubro)
    }
    setPaymentOptions(newPaymentOptions)
    form.reset()
  }

  const boardRowClass =
    paymentOptions[sector].length <= 1 ? 'board-row disabled' : 'board-row'

  return (
    <form
      className={boardRowClass}
      onSubmit={handleAddPayment}
      data-sector={sector}
    >
      <span className="board-row-sector">{sector}</span>
      <select name="rubro">
        {paymentOptions[sector].map((rubro) => (
          <option key={`${sector}_${rubro}`}>{rubro}</option>
        ))}
      </select>
      <input name="amount" type="number" required={true} placeholder="$" />
      <input name="expiration" type="date" />
      <button className="board-row-btn" type="submit">
        <img src={play} alt="paly svg" />
      </button>
    </form>
  )
}
