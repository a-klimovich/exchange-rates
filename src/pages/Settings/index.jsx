import React, { useContext } from "react";
import { useState } from 'react'
import Context from "../../state/Context";


const Settings = () => {
  const { currencies, addSelectCurrency } = useContext(Context)
  const [inputValue, setInputValue] = useState('')
  let sortArr = []

  currencies.allExchangeDate.filter(el => {
    if (el.Cur_DateEnd === "2050-01-01T00:00:00" ) {
      sortArr.push(el)
    }
  })

  const handlerSearch = (val) => {
    setInputValue(val)
    
  }

  return (
    <div>
      <h2>Добавление новой отслеживаемой валюты</h2>

      <table>
        <thead>
          <tr>
            <th>Название валюты</th>
            <th>Буквенный код валюты</th>
            <th>Периодичность установления курса</th>
          </tr>
        </thead>
        <tbody>
        {
          sortArr.map((el) => {
            return (
              <tr key={`${el.Cur_ID}${el.Cur_Name}`}>
              <td>{el.Cur_Name}</td>
              <td>{el.Cur_Abbreviation}</td>
              <td>{el.Cur_Periodicity !== 0 ? 'ежемесячно' : 'ежедневно'}</td>
              <td><button className="current-subscribe-btn" onClick={() => addSelectCurrency(el.Cur_ID)}>Subscribe</button></td>
            </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Settings;