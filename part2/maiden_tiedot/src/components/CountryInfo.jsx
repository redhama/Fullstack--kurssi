import {useState} from 'react'

const CountryInfo = ({country}) => {
    function handleShowCountry() {
        setIsActive(!isActive)
    }

    const [isActive, setIsActive] = useState(false)

    if (isActive) {
        return(
            <div key={country.name.common}>
                <h1>{country.name.common}</h1>
                <p>Capital {country.capital}</p>
                <p>Area {country.area}</p>
                <h1>Languages</h1>
                <ul>
                    {Object.entries(country.languages).map(language =>
                        <li key={language[0]}>{language[1]}</li>
                    )}
                </ul>
                <img src={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`} alt={country.flags.alt}></img>
            </div>
        )
    } else {
        return (
            <div key={country.cca3}>{country.name.common} <button onClick={handleShowCountry}>Show</button></div> 
        )
    }

}

export default CountryInfo