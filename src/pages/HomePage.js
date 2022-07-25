import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryFireCountThunk } from '../redux/CountrySlice';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryFireCountThunk());
  }, []);

  const countryCount = useSelector((state) => state.country.countryCount);
  let countryList = [];
  let counter = 0;
  countryCount.forEach((country) => {
    countryList.push(<li>{country[0]}</li>);
    counter += country[1];
  })

  return (
    <>
      <h2>Daily focused fire count in South America: {counter}</h2>
      <ul>
        {countryList}
      </ul>
    </>
  );
};

export default HomePage;
