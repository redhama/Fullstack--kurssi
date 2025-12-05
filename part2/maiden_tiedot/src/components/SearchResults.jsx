import CountryInfo from './CountryInfo'

const SearchResults = ({searchedCountries}) => {
    if (searchedCountries.length > 10) {
        return(
            <>
                Too many results, specify another filter
            </>
        )
    }

    return(
        <>
            {searchedCountries.map(country =>
                <CountryInfo key={country.cca3} country={country}></CountryInfo>
            )}
        </>
    )
}

export default SearchResults