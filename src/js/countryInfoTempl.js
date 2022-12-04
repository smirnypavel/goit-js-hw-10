export const countryInfoTempl = ({ name, flags, capital, population, languages }) => {
    const countryLanguages = Object.values(languages).join(', ');
  
    return `<div><img src="${flags.svg}" alt="Flag of ${name.official}">
    <h2><b>${name.official}</b></h2></div>
    <p><b>Capital</b>: ${capital}</p>
    <p><b>Population</b>: ${population}</p>
    <p><b>Languages</b>: ${countryLanguages}</p>`;
  };