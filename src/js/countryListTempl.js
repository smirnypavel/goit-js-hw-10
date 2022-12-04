export const countryListTempl = countries => {
    return countries
      .map(({ flags, name }) => {
        return `<li>
    <img src="${flags.svg}" alt="Flag of ${name.official}">
    <h2><b>${name.official}</b></h2>
  </li>`;
      })
      .join('');
  };