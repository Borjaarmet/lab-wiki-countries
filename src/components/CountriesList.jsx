import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <Fragment>
      <div className="modal-scrollable-area flex flex-col flex-start ml-4 w-2/4 mr-6 mt-6">
        {props.countries.map((country) => {
          return (
            <div key={country.cca3} className="border p-2">
              <Link to={`/countries/${country.cca3}`}>
                <p className="flag text-xl">
                  {country.flag} <i>{country.name.common}</i>
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CountriesList;
