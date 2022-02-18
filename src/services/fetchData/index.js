const BASE_URLS = {
  currencies: 'https://www.nbrb.by/api/exrates/currencies',
  rates: 'https://www.nbrb.by/api/exrates/rates/'
}

const getFetchData = async (url) => {
  const data = await fetch(url)
  const json = await data.json();
  return json;
}

const fetchData = async (fireBase) => {
  const currencies = await getFetchData(`${BASE_URLS.currencies}`)

  const rates = await Promise.all(
    fireBase.map((item) => getFetchData(`${BASE_URLS.rates}${item}`))
  )

  return {
    firstPageDate: [...rates],
    allExchangeDate: [...currencies]
  }
}

export default fetchData
