import axios from 'axios';

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api'

const getCountries = () => {
    let request = axios.get(`${BASE_URL}/all`).then((response) => response.data);
        
    return request.then( (countries) => countries.map(country => {
        let tmp = {
            name: country.name.common,
            capital: country.capital,
            area: country.area,
            languages: country.languages,
            flag: country.flags.png
        };
        return tmp
    }))
}

export default {getCountries}