import { useState, useMemo, useEffect } from 'react'
import fetchData from '../services/fetchData'
import Context from './Context'

const Provider = ({ children }) => {
  const [currencies, setCurrencies] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCurrency, setSelectedCurrency] = useState([431, 510])

  const runAsync = async (arrSelectCur) => {
    try {
      const data = await fetchData(arrSelectCur)
      setCurrencies(data)
    } catch (err) {
      alert('Something went wrong')
    }
    setIsLoading(false)
  }

  function addSelectCurrency(id) {
    setSelectedCurrency([...selectedCurrency, id])
  }

  function removeSelectCurrency(id) {
    let index =  selectedCurrency.indexOf(id)
    let arr = [...selectedCurrency]
    arr.splice(index, 1)
    return setSelectedCurrency(arr)
  }

  useEffect(() => {
    runAsync(selectedCurrency)
  }, [selectedCurrency])

  const value = useMemo(() => ({
    currencies,
    isLoading,
    selectedCurrency,
    addSelectCurrency,
    setSelectedCurrency,
    removeSelectCurrency,
  }), [currencies, isLoading, selectedCurrency, setSelectedCurrency, addSelectCurrency, removeSelectCurrency])

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
