import modal from "./modal.js";
import layoutInput from "../hbs/LayoutForCountriesInput.hbs";
import layout from "../hbs/LayoutForCountries.hbs";

const debounce = require('lodash.debounce');
const refs = {
    input: document.querySelector('.js-country-to-serch'),
    div: document.querySelector('.js-mrkap-plce'),
    datalist: document.querySelector('datalist'),
};

refs.input.addEventListener('input', debounce(input, 500));
function input () {
    return refs.input.value.length? 
    fetchCountries(refs.input.value)
    :null
};

export default function fetchCountries (searchQuery) {
    return new Promise((resolve, reject) => {
       return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
        .then(response => {
            const error = `Ошибка! ${response.status} ${response.statusText}`;
            if(response.ok){
                onRequest(response.json())
                return resolve(response);
            };
            return reject(error);
        });
})};

function onRequest (data) {
    data.then(newArray =>{
        if(newArray.length > 10){
            return modal('Уточните ввод');
        } else if (newArray.length <= 10 && newArray.length >= 2){
            return refs.datalist.innerHTML = layoutInput(newArray);
        };
        return mrkap(newArray);
    });
};

function mrkap (country) {
    console.dir(country)
    refs.div.innerHTML = layout(country)
}