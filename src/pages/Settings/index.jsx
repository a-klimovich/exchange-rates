import React, { useContext } from "react";
import { useState } from 'react'
import Context from "../../state/Context";


const Settings = () => {
  const { currencies, setSelectedСurrency } = useContext(Context)
  const [inputValue, setInputValue] = useState('')
  let sotrArr = []

  currencies.allExchangeDate.filter(el => {
    return el.Cur_DateEnd !== "2050-01-01T00:00:00" 
    ? ''
    : sotrArr.push(el)
  })

  const handleToSubscribe = (itemDate) => setSelectedСurrency(itemDate)

  return (
    <div>
      <div>
        <button onClick={() => ""}>
          REFRESH
        </button>

        <h2>EXCHANGE RATE</h2>

        Search: {' '}
        <input type="text" value={inputValue} onChange={(element) => setInputValue(element.target.value)} />
      </div>

      <div>
      <table>
        <thead>
          <tr>
            {/* <td>Дата обновления</td> */}
            <td>Название валюты</td>
            <td>Буквенный код валюты</td>
            <td>Периодичность установления курса</td>
          </tr>
        </thead>
        <tbody>
        {
          sotrArr.map((el) => {
            return (
              <tr key={`${el.Cur_ID}${el.Cur_Name}`}>
              {/* <td>{item.Cur_ID}</td> */}
              <td>{el.Cur_Name}</td>
              <td>{el.Cur_Abbreviation}</td>
              <td>{el.Cur_Periodicity !== 0 ? 'ежемесячно' : 'ежедневно'}</td>
              <td><button onClick={(itemID) => handleToSubscribe(el)}>Subscribe</button></td>
            </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Settings;