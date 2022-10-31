// Есть файл fetchCountries.js с дефолтным экспортом функции 
// fetchCountries(searchQuery), возвращающей промис с массивом стран, результат 
// запроса к API.
import modal from "./modal.js";

function fetchCountries (searchQuery) {
    return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(response => {
        const error = `Страна с таким названием не найдена Код ошибки:  ${response.status} ${response.statusText}`;
        if(response.ok){
            return response.json();
        };
        throw new Error(error);
    }).catch(err => modal(err));
};
export default fetchCountries