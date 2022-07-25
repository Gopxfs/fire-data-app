import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountryFireCountThunk, getCountriesThunk } from '../redux/Thunks';

let load = true;

const CountriesList = () => {
  const dispatch = useDispatch();
  if (load) {
    load = false;
    dispatch(getCountryFireCountThunk());
    dispatch(getCountriesThunk());
  }

  const countryCount = useSelector((state) => state.country.countryCount);
  const countryList = [];
  let counter = 0;
  countryCount.forEach((country) => {
    countryList.push(
      <li>
        <Link to="country">
          {country[0]}
          :
          {' '}
          {country[1]}
        </Link>
      </li>,
    );
    counter += country[1];
  });

  return (
    <>
      <h2>
        Daily focused fire count in South America:
        {counter}
      </h2>
      <p>STATS BY COUNTRY</p>
      <ul>
        {countryList}
      </ul>
    </>
  );
};

export default CountriesList;
