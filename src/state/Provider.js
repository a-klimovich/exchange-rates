import { useState, useMemo, useEffect } from 'react'
import fetchData from '../services/fetchData'
import Context from './Context'

const Provider = ({ children }) => {
  const [currencies, setCurrencies] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCurrency, setSelectedCurrency] = useState([])

  const addSelectCurrency = (id) => {
    setSelectedCurrency([...selectedCurrency, id])
  }

  const removeSelectCurrency = () => {}

  const runAsync = async () => {
    try {
      const data = await fetchData()
      setCurrencies(data)
    } catch (err) {
      alert('Something went wrong')
    }
    setIsLoading(false)
  }

  useEffect(() => {
    runAsync()
  }, [])

  const value = useMemo(() => ({
    currencies,
    isLoading,
    selectedCurrency,
    addSelectCurrency,
    removeSelectCurrency
  }), [currencies, isLoading, selectedCurrency, removeSelectCurrency])

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
