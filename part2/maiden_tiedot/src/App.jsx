import {useState} from 'react'
import {useEffect} from 'react'
import getCountries from './services/getCountries'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'

const App = () => {
  const [allCountries, setallCountries] = useState([])
  const [filteredCountries, setfilteredCountries] = useState([])

  useEffect(() => {
    getCountries.getAll()
    .then(allCountries => setallCountries(allCountries))
  }, [])

  function handleFilterChange(e) {
    const newFilterValue = e.target.value
    const newFilter = allCountries.filter((country) => country.name.common.toLowerCase().includes(newFilterValue.toLowerCase()))
    setfilteredCountries(newFilter)
  }

  return (
    <>
      <SearchForm handleFilterChange={handleFilterChange}></SearchForm>
      <SearchResults searchedCountries={filteredCountries}></SearchResults>
    </>
  )
}

export default App
