const BASE_URLS = {
  currencies: 'https://www.nbrb.by/api/exrates/currencies',
  rates: 'https://www.nbrb.by/api/exrates/rates/'
}

const getFetchData = async (url) => {
  const data = await fetch(url)
  const json = await data.json();
  return json;
}

const fetchData = async () => {
    const baseReqToRendor = [431, 429, 451, 456, 457, 469, 482, 480, 493]

    const rates = await Promise.all(
      baseReqToRendor.map((item) => getFetchData(`${BASE_URLS.rates}${item}`))
    )

    const currencies = await getFetchData(`${BASE_URLS.currencies}`)

    return {
      firstPageDate: [...rates],
      allExchangeDate: [...currencies]
    }
}

export default fetchData
