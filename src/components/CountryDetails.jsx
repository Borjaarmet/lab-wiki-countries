import React from 'react';
import countriesJson from '../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const selectedCountry = countriesJson.find(
    (country) => country.cca3 === props.match.params.cca3
  );

  return (
    <div className=" modal-scrollable-area w-2/5 mt-6 border-2 p-4 h-9/12 shadow-2xl bg-gray-100">
      <div className="flex justify-center m-5">
        <h1 className=" text-4xl  p-2">
          {selectedCountry.flag}
          {selectedCountry.name.common}
        </h1>
      </div>
      <hr />
      <div className="flex justify-between m-3">
        <p className=" text-xl tracking-widest">
          Capital: {selectedCountry.capital}
        </p>
      </div>
      <hr />
      <div className="flex justify-between m-3">
        <p className=" text-xl tracking-widest">Area: {selectedCountry.area}</p>
      </div>
      <hr />
      <div className="flex justify-between m-3">
        <p className=" text-xl tracking-widest">
          Region: {selectedCountry.region}
        </p>
      </div>
      <hr />
      <div className="flex  justify-between m-3">
        <p className=" text-xl tracking-widest"> Borders</p>
        <ul>
          {selectedCountry.borders.map((border) => {
            const matchCountry = countriesJson.find(
              (country) => country.cca3 === border
            );
            return (
              <li className="text-xl text-blue-300 m-6" key={matchCountry.cca3}>
                <Link className="mb-3" to={`/countries/${matchCountry.cca3}`}>
                  {matchCountry.name.official}
                  <hr />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CountryDetails;
