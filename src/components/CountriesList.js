import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getCountryFireCountThunk, getCountriesThunk, getStatesThunk } from '../redux/Thunks';
import { updateTotalFires, sortCountriesList } from '../redux/CountrySlice';

let load = true;

const getCountryID = (country, list) => {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].pais_name === country) return list[i].pais_id;
  }
  return 'Not found';
};

const CountriesList = () => {
  const dispatch = useDispatch();
  if (load) {
    load = false;
    dispatch(getCountryFireCountThunk());
    dispatch(getCountriesThunk());
  }

  const IDList = useSelector((state) => state.country.countriesList);
  const countryCount = useSelector((state) => state.country.countryCount);
  const countryList = [];
  let counter = 0;

  countryCount.forEach((country) => {
    countryList.push(
      <li key={country[0]}>
        <Link className="countries" to="country" onClick={() => { dispatch(getStatesThunk(getCountryID(country[0], IDList))); }}>
          <div className="country">
            <p>
              {country[0]}
              :
              {' '}
              {country[1]}
            </p>
            <div className={`${country[0]} flag`} />
          </div>
        </Link>
      </li>,
    );
    counter += country[1];
  });

  useEffect(() => {
    if (counter > 0) dispatch(updateTotalFires(counter));
  });

  return (
    <main>
      <h2>
        <p>
          {` ${counter}`}
          <br />
        </p>
        Fires detected in South America
      </h2>
      <div className="listHeader">
        <p>Stats by country</p>
        <select className="sortBox" onChange={(e) => { dispatch(sortCountriesList(e.target.value)); }} defaultValue="">
          <option value="" disabled hidden>Sort by</option>
          <option value="higher">Higher first</option>
          <option value="lower">Lower first</option>
        </select>
      </div>
      <ul>
        {countryList}
      </ul>
    </main>
  );
};

export default CountriesList;
