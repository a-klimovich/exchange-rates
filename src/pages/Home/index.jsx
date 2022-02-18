import React from "react";
import { useContext } from "react";
import Context from "../../state/Context";

const Home = () => {
  const { currencies, removeSelectCurrency } = useContext(Context)

  const handleToCopyData = async (text) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    }
  }

  function formatDate(date) {
    let dd = date.getDate();
      if (dd < 10) dd = '0' + dd;
  
    let mm = date.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;
  
    let yy = date.getFullYear() % 100;
      if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Дата обновления</td>
            <td>Название валюты</td>
            <td>Буквенный код валюты</td>
            <td>Текущий курс</td>
          </tr>
        </thead>
        <tbody>
        {
          currencies.firstPageDate.map((item, idx) => {
            return (
              <tr key={`${item.Cur_ID}${idx}`}>
                <td>{idx+1}</td>
                <td>{formatDate(new Date(item.Date))}</td>
                <td>{item.Cur_Name}</td>
                <td>{item.Cur_Abbreviation}</td>
                <td>{Number(item.Cur_OfficialRate / item.Cur_Scale).toFixed(3)}</td>
                <td><button onClick={() => handleToCopyData(`${item.Cur_Name} ${item.Cur_OfficialRate} руб. на ${formatDate(new Date(item.Date))}`)}>copy</button></td>
                <td><button  onClick={() => removeSelectCurrency(item.Cur_ID)} >X</button></td>
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