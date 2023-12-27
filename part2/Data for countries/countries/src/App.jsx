import { useState, useEffect } from 'react'
import countriesService from './Services/countries'

function App() {
  const [newCountry, setNewCountry] = useState("")
  const [countries, setCountries] = useState(null)
  const [countriesFiltered, setCountriesFiltered] = useState(null)

  const handleInputCountry = (event) => {
    
    setNewCountry(event.target.value)

    let value = event.target.value.toUpperCase()

    let countriesFiltered = countries.filter(country => country.name.toUpperCase().includes(value))
    setCountriesFiltered(countriesFiltered)
  }

  const onShowButton = (name) => {
    let showContrie = countries.find((c) => c.name === name);
    if(showContrie){
      setCountriesFiltered([showContrie])
    }
  }

  useEffect(() => {
    countriesService.getCountries()
    .then(countries => {
      console.log(countries)
      setCountries(countries)
      setCountriesFiltered(countries)
    })
    .catch(err => console.error(err))

  }, []);
  
  return (
    <>
    <div>
      <p>Find countries</p>
      <input type="text" onChange={handleInputCountry} value={newCountry} />
    </div>

    <div>
      {countriesFiltered && <Countries countries={countriesFiltered} showButtonClick={onShowButton} /> }
    </div>
      
    </>
  )
}

const Countries = ({countries, showButtonClick}) => {
  console.log(countries)
  if (countries.length > 10) {
    return <p> Too many matches, especify another filter</p>
  }
  else if (countries.length == 1){
    let country = countries[0]

    return <>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital.length > 0 && <b>{country.capital[0]}</b>}</p>
      <p>Area: {<b>{country.area}</b>}</p>
      <h4>Languages</h4>
      <ul>
        {
          Object.values(country.languages).map(language => <li key={language}>{language}</li>)
        }
      </ul>
      <img src={country.flag} alt="country flag" />
    </>
  }

  return <>
    {
      countries.map((country) =><p key={country.name}>
          {country.name} 
          <button onClick={() => showButtonClick(country.name)}>Show</button>
        </p>
      )
    }
  </>
}

export default App
