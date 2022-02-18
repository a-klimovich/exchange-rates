import React from "react";
import { useContext, useState } from "react";
import Context from "../../state/Context";

const Home = () => {
  const { locales } = useContext(Context)

  const handleToCopyData = async (itemID, text) => {
    if (navigator.clipboard) {

      await navigator.clipboard.writeText(text);
    
    }
  }

  function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Дата обновления</td>
            <td>Название валюты</td>
            <td>Буквенный код валюты</td>
            <td>Текущий курс</td>
          </tr>
        </thead>
        <tbody>
        {
          locales.firstPageDate.map((item, idx) => {
            return (
              <tr key={`${item.Cur_ID}${idx}`}>
                <td>{formatDate(new Date(item.Date))}</td>
                <td>{item.Cur_Name}</td>
                <td>{item.Cur_Abbreviation}</td>
                <td>{`${item.Cur_OfficialRate} pуб.`}</td>
                <td><button onClick={(itemID) => handleToCopyData(item.Cur_ID, `${item.Cur_Name} ${item.Cur_OfficialRate} руб. на ${formatDate(new Date(item.Date))}`)}>copy</button></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Home;