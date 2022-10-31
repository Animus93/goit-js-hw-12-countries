
import modal from "./modal.js";
import layoutInput from "../hbs/LayoutForCountriesInput.hbs";
import layout from "../hbs/LayoutForCountries.hbs";
import fetchCountries from "./fetchCountries.js";

const debounce = require('lodash.debounce');
const refs = {
    input: document.querySelector('.js-country-to-serch'),
    div: document.querySelector('.js-mrkap-plce'),
    datalist: document.querySelector('datalist'),
};

refs.input.addEventListener('input', debounce(input, 500));
function input () {
    if(!refs.input.value.length){
        return;
    };
    fetchCountries(refs.input.value).then(newArray => {
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