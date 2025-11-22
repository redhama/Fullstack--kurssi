const SearchResults = ({searchedCountries}) => {
    if (searchedCountries.length > 10) {
        return(
            <>
                Too many results, specify another filter
            </>
        )
    }

    if (searchedCountries.length == 1) {
        return(
            <>
                {searchedCountries.map(country => 
                <div key={country.name.common}>
                    <h1>{country.name.common}</h1>
                    <p>Capital {country.capital}</p>
                    <p>Area {country.area}</p>
                    <h1>Languages</h1>
                    <ul>
                        {Object.entries(country.languages).map(language => // Selvitä miksi pitää käyttää Object.metodeja eikä vaan suoraa .map
                            <li key={language[0]}>{language[1]}</li>
                        )}
                    </ul>
                    <img src={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`} alt={country.flags.alt}></img>
                    </div>)}
            </>
        )
    }
    
    return(
        <>
            {searchedCountries.map(country => <div key={country.name.common}>{country.name.common}<button>Show</button></div>)}
        </>
    )
}

export default SearchResults